export default {
  name: 'help',
  description: 'Command: help',
  async execute(message, args) {
    message.channel.send('help command works!');
  }
};
