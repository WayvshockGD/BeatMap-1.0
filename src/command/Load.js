let { readdirSync } = require('fs');

module.exports = (client) => {
    let folder = readdirSync('./commands');
    client.commands = new Map()

    for (let folders of folder) {
        let category = readdirSync('./commands/' + folders + '/')
                     .filter(file => file.endsWith('.js'));
            for(let file of category) {
                let command = require(`../../commands/${folders}/${file}`);
                let newCommandClass = new command()
                client.commands.set(newCommandClass.name, newCommandClass)
            }
    }
}