export default {
  name: 'play',
  description: 'Command: play',
  async execute(message, args) {
    message.channel.send('play command works!');
  }
};
