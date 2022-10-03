const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('enregistrer-les-commandes')
        .setDescription('renvoie la commande pour enregistrer les commandes'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        return interaction.reply('node ./deploy-commands.js');
    }
}