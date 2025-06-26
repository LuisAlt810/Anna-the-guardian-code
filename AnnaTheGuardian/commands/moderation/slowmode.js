export default {
  name: 'slowmode',
  description: 'Set slowmode delay in seconds (Staff Only)',
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
    const delay = parseInt(args[0]);
    if (isNaN(delay) || delay < 0 || delay > 21600) return message.reply('Provide a valid slowmode delay (0-21600 seconds).');
    await message.channel.setRateLimitPerUser(delay);
    message.channel.send(`Slowmode set to ${delay} seconds.`);
  }
};
