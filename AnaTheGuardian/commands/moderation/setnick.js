export default {
  name: 'setnick',
  description: 'Command: setnick',
  async execute(message, args) {
    message.channel.send('setnick command works!');
  }
};
