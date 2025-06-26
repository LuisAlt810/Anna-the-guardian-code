export default {
  name: 'unmutechannel',
  description: 'Command: unmutechannel',
  async execute(message, args) {
    message.channel.send('unmutechannel command works!');
  }
};
