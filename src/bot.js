require('dotenv').config();
const { MessageEmbed, Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const client = new Client();

(async () => {
  client.on("messageDelete", async message=>{

    const embed = new MessageEmbed()
    .setTitle("A New Message Deleted!")
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(":speaking_head: | Message Author", message.member)
    .addField(":page_facing_up: | Message Deleted", message)
    .addField(":boy: | Deleted By", message.author.tag)
    .addField(":speech_balloon: | Deleted In:", message.channel)
    .addField(":clock6: | Deleted At:", message.createdAt);

    let logChannel = message.guild.channels.cache.find(channel => channel.name === "logs")
    if(!logChannel) return;


    logChannel.send(embed);

});
client.on("", async message=>{

  const embed = new MessageEmbed()
  .setTitle("A New Message Deleted!")
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL())
  .addField(":speaking_head: | Message Author", message.member)
  .addField(":page_facing_up: | Message Deleted", message)
  .addField(":boy: | Deleted By", message.author.tag)
  .addField(":speech_balloon: | Deleted In:", message.channel)
  .addField(":clock6: | Deleted At:", message.createdAt);

  if(!logChannel) return;


  logChannel.send(embed);

});
  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.DISCORD_BOT_PREFIX;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();
