let { Client } = require('eris');
const Load = require('../command/Load');
let CommandHandler = require('../../handlers/CommandHandler');
let { ClientOptions, Core: { token, prefix }} = require('../options.json');

class BeatMap extends Client {
    constructor() {
        super(token, {ClientOptions});

        this.once('ready', this.onReady.bind(this));
        this.messageEvent();

        Load(this);
    }

    onReady() {
        console.info('Ready');
        this.intStatus();
    }

    intStatus() {
        this.editStatus(
            'idle', {
            'type': 3,
            'name': `${this.guilds.size} Servers - ${prefix}help`
        })
    }

    messageEvent() {
        this.on('messageCreate', (message) => {
            CommandHandler(message, this);
        })
    }
}

module.exports = new BeatMap()