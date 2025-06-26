import { Client, GatewayIntentBits, Collection, ActivityType } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.commands = new Collection();

const folders = ['./commands/general', './commands/moderation'];
for (const folder of folders) {
  const commandFiles = fs.readdirSync(path.join(process.cwd(), folder)).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = await import(path.join(process.cwd(), folder, file));
    client.commands.set(command.default.name, command.default);
  }
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity('Flowers 🌺', { type: ActivityType.Watching });
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  const prefixes = ['?', '!', '@'];
  const prefix = prefixes.find(p => message.content.startsWith(p));
  if (!prefix) return;

  const args = message.content.slice(prefix.length).trim().split(/\s+/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    await command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error executing this command.');
  }
});

client.login(process.env.BOT_TOKEN);
