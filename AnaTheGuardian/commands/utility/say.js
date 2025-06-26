export default {
  name: 'say',
  description: 'Command: say',
  async execute(message, args) {
    message.channel.send('say command works!');
  }
};
