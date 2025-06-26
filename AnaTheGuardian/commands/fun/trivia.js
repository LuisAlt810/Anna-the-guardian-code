export default {
  name: 'trivia',
  description: 'Command: trivia',
  async execute(message, args) {
    message.channel.send('trivia command works!');
  }
};
