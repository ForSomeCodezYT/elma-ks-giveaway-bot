const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = class TweetCommand extends BaseCommand {
  constructor() {
    super('tweet', 'Fun', []);
  }

async run(client, message, args) {
    const text = args.join(" ");
    const { username } = message.author;

    if (!text) return message.channel.send("Please provide text");

    const sendMsg = await message.channel.send("⚙ Processing Image..");

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=tweet&text=${text}&username=${username}`
    )
      .then((res) => res.json())
      .catch((e) => {
        console.error(e);
        message.channel.send("Something went wrong!");
      });

    sendMsg.delete();
    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("BLUE")
      .setDescription(
        `[Click here if the image failed to load.](${data.message})`
      )
      .setImage(data.message)
      .setTimestamp();

    message.channel.send({ embed });
  }
}
