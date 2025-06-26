export default {
  name: 'coinflip',
  description: 'Flips a coin',
  async execute(message) {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    await message.channel.send(`The coin landed on: **${result}**`);
  }
};
