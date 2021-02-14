let CommandStructure = require('../../src/structures/CommandStructure');

class Help extends CommandStructure {
    constructor(...args) {
        super(...args);

        this.name = 'help';
        this.aliases = [ 'commands' ];
        this.category = 'Core';
    }

    async execute({ message, client }) {
        return await client.createMessage(message.channel.id, {
            embed: {
                title: 'help'
            }
        })
    }
}

module.exports = Help;