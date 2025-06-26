export default {
  name: 'movie',
  description: 'Command: movie',
  async execute(message, args) {
    message.channel.send('movie command works!');
  }
};
