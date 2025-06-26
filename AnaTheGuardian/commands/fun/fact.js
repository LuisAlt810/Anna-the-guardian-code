export default {
  name: 'fact',
  description: 'Command: fact',
  async execute(message, args) {
    message.channel.send('fact command works!');
  }
};
