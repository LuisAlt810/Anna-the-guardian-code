export default {
  name: 'joke',
  description: 'Command: joke',
  async execute(message, args) {
    message.channel.send('joke command works!');
  }
};
