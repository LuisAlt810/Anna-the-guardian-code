export default {
  name: 'help',
  description: 'Shows all available commands',
  async execute(message) {
    const commands = message.client.commands;
    let reply = '**Available Commands:**\n';
    for (const cmd of commands.values()) {
      reply += `**${cmd.name}** — ${cmd.description}\n`;
    }
    await message.channel.send(reply);
  }
};
