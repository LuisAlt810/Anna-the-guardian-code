export default {
  name: 'queue',
  description: 'Command: queue',
  async execute(message, args) {
    message.channel.send('queue command works!');
  }
};
