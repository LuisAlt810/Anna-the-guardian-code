export default {
  name: 'mute',
  description: 'Mute a user by adding Muted role (Staff Only)',
  async execute(message, args) {
    const allowedRoles = [
      '1376615207211896943',
      '1133150786268958770',
      '1387616260266655766',
      '1372734226931384452',
      '1382552430314782827',
      '1133138867361431693'
    ];
    if (!message.member.roles.cache.some(role => allowedRoles.includes(role.id))) {
      return message.reply("You don't have permission to use this command.");
    }
    const member = message.mentions.members.first();
    if (!member) return message.reply('Please mention a member to mute.');
    const mutedRole = message.guild.roles.cache.find(r => r.name === 'Muted');
    if (!mutedRole) return message.reply('Muted role not found.');
    await member.roles.add(mutedRole);
    message.channel.send(`${member.user.tag} was muted.`);
  }
};
