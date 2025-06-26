export default {
  name: 'uptime',
  description: 'Command: uptime',
  async execute(message, args) {
    message.channel.send('uptime command works!');
  }
};
