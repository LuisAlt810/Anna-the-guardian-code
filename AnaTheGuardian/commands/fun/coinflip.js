export default {
  name: 'coinflip',
  description: 'Command: coinflip',
  async execute(message, args) {
    message.channel.send('coinflip command works!');
  }
};
