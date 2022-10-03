const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('demarre-moi')
        .setDescription('renvoie la commande pour demarrer le bot'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        return interaction.reply('node index');
    }
}