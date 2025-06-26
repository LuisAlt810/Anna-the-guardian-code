export default {
  name: 'echo',
  description: 'Repeats your message',
  async execute(message, args) {
    if (!args.length) return message.reply('Please provide a message to echo.');
    await message.channel.send(args.join(' '));
  }
};
