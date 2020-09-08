const BaseCommand = require('../../utils/structures/BaseCommand');
const figlet = require("figlet");
module.exports = class AsciiCommand extends BaseCommand {
  constructor() {
    super('ascii', 'Fun', []);
  }

  run(client, message, args) {const text = args.join(" ");

        figlet.text(text, (e, txt) => {
            if (e) return console.log(e);
            message.channel.send(`\`\`\` ${txt.trimRight()} \`\`\``);
        });
    }
  
}
