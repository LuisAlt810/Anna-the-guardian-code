export default {
  name: 'weather',
  description: 'Command: weather',
  async execute(message, args) {
    message.channel.send('weather command works!');
  }
};
