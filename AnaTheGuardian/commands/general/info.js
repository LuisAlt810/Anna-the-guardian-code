export default {
  name: 'info',
  description: 'Command: info',
  async execute(message, args) {
    message.channel.send('info command works!');
  }
};
