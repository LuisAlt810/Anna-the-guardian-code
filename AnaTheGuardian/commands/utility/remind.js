export default {
  name: 'remind',
  description: 'Command: remind',
  async execute(message, args) {
    message.channel.send('remind command works!');
  }
};
