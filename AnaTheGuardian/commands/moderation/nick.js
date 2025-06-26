export default {
  name: 'nick',
  description: 'Command: nick',
  async execute(message, args) {
    message.channel.send('nick command works!');
  }
};
