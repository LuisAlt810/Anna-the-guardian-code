export default {
  name: 'warn',
  description: 'Command: warn',
  async execute(message, args) {
    message.channel.send('warn command works!');
  }
};
