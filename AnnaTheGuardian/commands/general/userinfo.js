export default {
  name: 'userinfo',
  description: 'Shows info about a user',
  async execute(message, args) {
    const user = message.mentions.members.first() || message.member;
    const embed = {
      color: 0x00ff00,
      title: `User info for ${user.user.tag}`,
      thumbnail: { url: user.user.displayAvatarURL({ dynamic: true }) },
      fields: [
        { name: 'ID', value: user.id, inline: true },
        { name: 'Joined server', value: user.joinedAt.toDateString(), inline: true },
        { name: 'Account created', value: user.user.createdAt.toDateString(), inline: true }
      ]
    };
    await message.channel.send({ embeds: [embed] });
  }
};
