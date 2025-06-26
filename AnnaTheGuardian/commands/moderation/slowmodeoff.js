export default {
  name: 'slowmodeoff',
  description: 'Disable slowmode (Staff Only)',
  async execute(message) {
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
    await message.channel.setRateLimitPerUser(0);
    message.channel.send('Slowmode disabled.');
  }
};
