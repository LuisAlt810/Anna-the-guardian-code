export default {
  name: 'stop',
  description: 'Command: stop',
  async execute(message, args) {
    message.channel.send('stop command works!');
  }
};
