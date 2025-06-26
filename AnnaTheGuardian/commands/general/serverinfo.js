export default {
  name: 'serverinfo',
  description: 'Shows server information',
  async execute(message) {
    const { guild } = message;
    const embed = {
      color: 0x0099ff,
      title: `${guild.name} info`,
      thumbnail: { url: guild.iconURL() },
      fields: [
        { name: 'Members', value: `${guild.memberCount}`, inline: true },
        { name: 'Created on', value: `${guild.createdAt.toDateString()}`, inline: true },
        { name: 'Region', value: `${guild.region || 'Unknown'}`, inline: true }
      ]
    };
    await message.channel.send({ embeds: [embed] });
  }
};
