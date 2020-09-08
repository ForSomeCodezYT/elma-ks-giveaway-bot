const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js");
module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'Admin', []);
  }

  run(client, message, args) {
    const ppl = message.mentions.users.first()
    const ppll = message.mentions.members.first()
    if(message.member.hasPermission("BAN_MEMBERS")) {
      const embed = new MessageEmbed();
      embed.setColor("GREEN")
      embed.setAuthor(message.author.username)
      embed.setTitle("Ban Hammer")
      embed.addField(`Banned By: `, message.author.username)
      embed.addField(`Banned: `, ppl)
      ppll.ban();
      let logChannel = message.guild.channels.cache.find(channel => channel.name === "logs")
      const logchannels = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("Ban Log")
      .addField(`Banned By: `, message.author)
      .addField(`Banned: `, ppl)
      logChannel.send(logchannels)
      const pplsend = new MessageEmbed()
      .setColor("RED")
      .setTitle(`You have Banned in ${message.guild.name}`)
      ppll.send(pplsend)
      message.channel.send(embed);
    } else {
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Missing Permissions")
        .addField(`You don't have the Following Permissions`, '`BAN_MEMBERS`')
        .setAuthor(message.author.username);
        message.channel.send(embed)
      }
    }
  }
}
