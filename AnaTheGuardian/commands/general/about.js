export default {
  name: 'about',
  description: 'Command: about',
  async execute(message, args) {
    message.channel.send('about command works!');
  }
};
