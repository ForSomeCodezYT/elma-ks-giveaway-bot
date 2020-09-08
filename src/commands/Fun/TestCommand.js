const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = class TweetCommand extends BaseCommand {
  constructor() {
    super('tts', 'Fun', []);
  }

async run(client, message, args) {
let ttsusage = args.slice(1).join(" ");
         if (ttsusage.length > 200)
           return message.channel.send(
             "Hey!! your message is too big, Make it smaller"
           );
         if (!ttsusage)
           return message.channel.send("you need text to make speech!!");
         googleTTS(ttsusage, "en-gb", 1)
           .then(function (url) {
             const attachtts = new Discord.MessageAttachment(url).setName(
               "tts.mp3"
             );
             message.channel.send(attachtts);
           })
           .catch(function (err) {
             console.error(err.stack);
           });
          }
        }