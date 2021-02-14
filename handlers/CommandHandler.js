let { Core: { prefix }} = require('../src/options.json');

module.exports = (message, client) => {
    if(!message.content.startsWith(prefix)) return false;

    let args = message.content.slice(prefix.length).trim().split(/ +/);
    let getCommand = args.shift().toLowerCase();

    const command = client.commands.get(getCommand)
        || client.commands.find(c => c.aliases && c.aliases.includes(getCommand));

    if(!command) return false;

    try {
        command.execute({ message, args, client })
    } catch (error) {
        console.log(error)
    }
}