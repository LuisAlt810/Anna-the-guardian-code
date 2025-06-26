export default {
  name: 'logs',
  description: 'Command: logs',
  async execute(message, args) {
    message.channel.send('logs command works!');
  }
};
