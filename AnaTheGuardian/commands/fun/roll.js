export default {
  name: 'roll',
  description: 'Command: roll',
  async execute(message, args) {
    message.channel.send('roll command works!');
  }
};
