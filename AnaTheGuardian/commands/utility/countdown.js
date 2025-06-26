export default {
  name: 'countdown',
  description: 'Command: countdown',
  async execute(message, args) {
    message.channel.send('countdown command works!');
  }
};
