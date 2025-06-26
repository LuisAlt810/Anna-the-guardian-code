const PREMIUM_ROLES = [
  '1376615207211896943',
  '1133150786268958770',
  '1387616260266655766',
  '1372734226931384452',
  '1382552430314782827',
  '1133138867361431693'
];

const LIFETIME_PREMIUM_USERS = ['zelda_life', 'Luisthegoat7301'];

export default {
  name: 'quality',
  description: 'Set music quality (premium & free options)',
  async execute(message, args) {
    if (!args.length) return message.reply('Please specify a quality: 4k, 1080p40, 730p80, or 480p.');

    const choice = args[0].toLowerCase();

    // Helper: check if user has any premium role
    const hasPremiumRole = message.member.roles.cache.some(role => PREMIUM_ROLES.includes(role.id));
    const username = message.author.username;

    if (choice === '4k') {
      if (!LIFETIME_PREMIUM_USERS.includes(username)) {
        return message.reply('4K quality is only available for lifetime premium users: zelda_life or Luisthegoat7301.');
      }
      // Set quality to 4K (implement your logic here)
      return message.channel.send('✅ Quality set to 4K (Lifetime Premium)');
    }

    if (choice === '1080p40') {
      if (!hasPremiumRole) {
        return message.reply('1080p40 quality is only available for premium role members.');
      }
      // Set quality to 1080p40 (implement your logic here)
      return message.channel.send('✅ Quality set to 1080p40 (Premium)');
    }

    if (choice === '730p80' || choice === '480p') {
      // Free options available to all
      // Set quality accordingly (implement your logic here)
      return message.channel.send(`✅ Quality set to ${choice} (Free)`);
    }

    return message.reply('Invalid quality option. Use: 4k, 1080p40, 730p80, or 480p.');
  }
};
