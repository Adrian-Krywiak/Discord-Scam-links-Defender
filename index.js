const {
  Client,
  Intents
} = require('discord.js')
const client = new Client({
  intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
  ]
})

require('dotenv').config();


client.on('ready', async () => {});

client.on('message', async (message) => {
  if (message.content.toLowerCase().includes('nitro') || message.content.toLowerCase().includes('gift'))
      message.delete()
  else {
      for (var i = 0; i < message.embeds.length; i++) {
          if (message.embeds[i].title.toLowerCase().includes("discord") || message.embeds[i].title.toLowerCase().includes("nitro") || message.embeds[i].title.toLowerCase().includes("gift") || message.embeds[i].description.toLowerCase().includes("discord") || message.embeds[i].description.toLowerCase().includes("nitro") || message.embeds[i].description.toLowerCase().includes("gift")) {
              message.delete()
              break;
          }
      }
  }
});

client.login(process.env.token);