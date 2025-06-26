export default {
  name: 'avatar',
  description: 'Shows user avatar',
  async execute(message, args) {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(user.displayAvatarURL({ dynamic: true, size: 512 }));
  }
};
