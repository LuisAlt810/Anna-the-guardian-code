export default {
  name: 'echo',
  description: 'Command: echo',
  async execute(message, args) {
    message.channel.send('echo command works!');
  }
};
