import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, NoSubscriberBehavior } from '@discordjs/voice';
import ytdl from 'ytdl-core';

export default {
  name: 'play',
  description: 'Play YouTube audio in voice channel',
  async execute(message, args) {
    if (!args.length) return message.reply('Please provide a YouTube URL.');

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('You need to be in a voice channel!');

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      return message.reply('I need permissions to join and speak in your voice channel!');
    }

    const url = args[0];
    if (!ytdl.validateURL(url)) return message.reply('Please provide a valid YouTube URL.');

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    const stream = ytdl(url, { filter: 'audioonly' });
    const resource = createAudioResource(stream);

    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Stop,
      },
    });

    player.play(resource);
    connection.subscribe(player);

    player.on(AudioPlayerStatus.Idle, () => {
      connection.destroy();
    });

    await message.channel.send(`🎶 Now playing: ${url}`);
  },
};
