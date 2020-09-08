const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js");
module.exports = class AnnounceCommand extends BaseCommand {
  constructor() {
    super('announce', 'Admin', []);
  }

  run(client, message, args) {
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `You did not specify your channel to send the announcement too!`
      );

    let MSG = message.content
      .split(`!announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    const _ = new MessageEmbed()
      .setTitle(`New announcement!`)
      .setDescription(`${MSG}`)
      .setColor("RANDOM");
    rChannel.send(_);
    message.delete();
  }
}
