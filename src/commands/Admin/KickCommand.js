const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js");
module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Admin', []);
  }

  run(client, message, args) {
    const ppl = message.mentions.users.first()
    const ppll = message.mentions.members.first()
    if(message.member.hasPermission("KICK_MEMBERS")) {
      const embed = new MessageEmbed();
      embed.setColor("GREEN")
      embed.setAuthor(message.author.username)
      embed.setTitle("Kick Hammer")
      embed.addField(`Kicked By: `, message.author.username)
      embed.addField(`Kicked: `, ppl)
      ppll.ban();
      let logChannel = message.guild.channels.cache.find(channel => channel.name === "logs")
      const logchannels = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("Kick Log")
      .addField(`Kicked By: `, message.author)
      .addField(`Kicked: `, ppl)
      logChannel.send(logchannels)
      const pplsend = new MessageEmbed()
      .setColor("RED")
      .setTitle(`You have Kicked in ${message.guild.name}`)
      ppll.send(pplsend)
      message.channel.send(embed);
    } else {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Missing Permissions")
        .addField(`You don't have the Following Permissions`, '`KICK_MEMBERS`')
        .setAuthor(message.author.username);

        message.channel.send(embed)
      }
    }
  }
}
