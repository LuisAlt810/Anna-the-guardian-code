export default {
  name: 'roll',
  description: 'Rolls a dice from 1 to 6',
  async execute(message) {
    const roll = Math.floor(Math.random() * 6) + 1;
    await message.channel.send(`You rolled a **${roll}**`);
  }
};
