export default {
  name: 'serverinfo',
  description: 'Command: serverinfo',
  async execute(message, args) {
    message.channel.send('serverinfo command works!');
  }
};
