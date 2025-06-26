import { getVoiceConnection } from '@discordjs/voice';

export default {
  name: 'stop',
  description: 'Stop music and leave voice channel',
  async execute(message) {
    const connection = getVoiceConnection(message.guild.id);
    if (!connection) return message.reply('I am not connected to a voice channel.');

    connection.destroy();
    await message.channel.send('⏹️ Music stopped and disconnected.');
  }
};
