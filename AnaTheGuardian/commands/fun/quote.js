export default {
  name: 'quote',
  description: 'Command: quote',
  async execute(message, args) {
    message.channel.send('quote command works!');
  }
};
