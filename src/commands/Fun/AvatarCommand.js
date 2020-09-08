const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'Fun', []);
  }

  run(client, message, args) {
    const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL();

        const embed = new MessageEmbed()
            .setTitle(`${user.username}'s Avatar`)
            .setFooter(message.author.username)
            .setDescription(`Click __[Here](${avatar})__ to download`)
            .setImage(`${avatar}`)
            .setColor("BLUE")
            .setTimestamp();

        message.channel.send(embed);
  }
}
