const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tu-est-la')
        .setDescription('verifie si le pc est toujour allumer'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        return interaction.reply('oui');
    }
}