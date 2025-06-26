export default {
  name: 'ping',
  description: 'Command: ping',
  async execute(message, args) {
    message.channel.send('ping command works!');
  }
};
