class CommandStructure {
    constructor(command) {

        this.name = command || '';

        this.aliases = command || [];

        this.category = command || '';
    }
}

module.exports = CommandStructure;