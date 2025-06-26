export default {
  name: 'time',
  description: 'Shows the current server time',
  async execute(message) {
    const now = new Date();
    await message.channel.send(`Current server time is: ${now.toLocaleString()}`);
  }
};
