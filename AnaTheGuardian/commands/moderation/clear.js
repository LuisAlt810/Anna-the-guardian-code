export default {
  name: 'clear',
  description: 'Command: clear',
  async execute(message, args) {
    message.channel.send('clear command works!');
  }
};
