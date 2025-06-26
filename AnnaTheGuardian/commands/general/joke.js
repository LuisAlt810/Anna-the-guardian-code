export default {
  name: 'joke',
  description: 'Tells a random joke',
  async execute(message) {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "Why did the scarecrow win an award? Because he was outstanding in his field."
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    await message.channel.send(joke);
  }
};
