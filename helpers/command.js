const { Client, CommandInteraction } = require("discord.js");

/**
 * 
 * @param {Client} Client 
 * @param {CommandInteraction} Interaction 
 */

const handleCommand = async (Client, Interaction) => {
    const command = Client.commands.get(Interaction.commandName);

    if(!command) return;

    try {
        await command.execute(Interaction);
    } catch (error) {
        console.error(error);
        await Interaction.reply({content: "une erreur c'est produite durant l'excution de cette commande", ephemeral:true});
    }
}

module.exports = handleCommand;