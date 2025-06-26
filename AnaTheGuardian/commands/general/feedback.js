export default {
  name: 'feedback',
  description: 'Command: feedback',
  async execute(message, args) {
    message.channel.send('feedback command works!');
  }
};
