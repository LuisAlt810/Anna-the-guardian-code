import ytSearch from 'yt-search';

export default {
  name: 'playspotify',
  description: 'Play a Spotify track by searching YouTube',
  async execute(message, args) {
    if (!args.length) return message.reply('Please provide a Spotify URL or song name.');

    const query = args.join(' ');

    const results = await ytSearch(query);
    const video = results.videos.length > 0 ? results.videos[0] : null;

    if (!video) return message.reply('No results found on YouTube.');

    await message.channel.send(`Found on YouTube: ${video.title} - ${video.url}`);

    // Here you can call your play command internally or handle playing the URL directly.
  }
};
