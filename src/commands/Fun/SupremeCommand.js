const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
module.exports = class SupremeCommand extends BaseCommand {
  constructor() {
    super('supreme', 'Fun', []);
  }

  async run(client, message, args) {
    const text = args.join(" ");

   if (!text) return message.channel.send("Please provide text!");

   const image = `https://api.alexflipnote.dev/supreme?text=${encodeURIComponent(
     text
   )}`;

   const embed = new MessageEmbed()
     .setFooter(message.author.username)
     .setColor("BLUE")
     .setDescription(`[Click here if the image failed to load.](${image})`)
     .setImage(image)
     .setTimestamp();

   message.channel.send(embed);
  }
}
