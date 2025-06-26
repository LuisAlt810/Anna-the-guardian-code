export default {
  name: 'mutechannel',
  description: 'Command: mutechannel',
  async execute(message, args) {
    message.channel.send('mutechannel command works!');
  }
};
