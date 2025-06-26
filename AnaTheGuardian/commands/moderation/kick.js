export default {
  name: 'kick',
  description: 'Command: kick',
  async execute(message, args) {
    message.channel.send('kick command works!');
  }
};
