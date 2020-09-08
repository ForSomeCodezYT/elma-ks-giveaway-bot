const BaseCommand = require('../../utils/structures/BaseCommand');
require("moment-duration-format");
const { version, MessageEmbed, client } = require("discord.js");
const moment = require("moment");

module.exports = class BotinfoCommand extends BaseCommand {
  constructor() {
    super('botinfo', 'Misc', []);
  }

  run(client, message, args) {
    const uptime = moment
            .duration(client.uptime)
            .format(" D [days], H [hrs], m [mins], s [secs]");
        const nodev = process.version;
        const createdAt = moment(client.user.createdAt).format("MM/DD/YYYY");

        const embed = new MessageEmbed()
            .setColor("BLUE")
            .setFooter(message.author.username)
            .setTitle("Bot Information")
            .addField("Bot Id:", client.user.id)
            .addField("Bot username:", client.user.username)
            .addField("__**Bot info:**__", `
**Status:** ${client.user.presence.status}
**Users:** ${client.users.cache.size}
**Servers:** ${client.guilds.cache.size}
**Channels:** ${client.channels.cache.size}
**Created on:** ${createdAt}
**Voice connections:** ${client.voice.connections.size}
            `)
            .addField(
                "__**System Info**__",
                `**RAM Usage:**  ${(
                    process.memoryUsage().heapUsed /
                    1024 /
                    1024
                ).toFixed(2)}MB
**Bot Uptime:** ${uptime}
**Node Version:** ${nodev}
**Discord.js version:** ${version}`
            )

        message.channel.send(embed);
  }
}
