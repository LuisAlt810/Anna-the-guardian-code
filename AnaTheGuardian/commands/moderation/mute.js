export default {
  name: 'mute',
  description: 'Command: mute',
  async execute(message, args) {
    message.channel.send('mute command works!');
  }
};
