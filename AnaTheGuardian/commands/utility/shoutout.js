export default {
  name: 'shoutout',
  description: 'Command: shoutout',
  async execute(message, args) {
    message.channel.send('shoutout command works!');
  }
};
