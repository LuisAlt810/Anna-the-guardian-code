export default {
  name: 'pause',
  description: 'Command: pause',
  async execute(message, args) {
    message.channel.send('pause command works!');
  }
};
