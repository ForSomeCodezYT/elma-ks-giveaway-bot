const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    client.user.setActivity("Coded by ART | ForSomeCodezYT#7754")
    console.log("ready.")
  }
}
