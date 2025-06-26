export default {
  name: 'meme',
  description: 'Command: meme',
  async execute(message, args) {
    message.channel.send('meme command works!');
  }
};
