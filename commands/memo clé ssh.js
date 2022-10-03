const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('memo-clé-ssh')
        .setDescription('renvoie la clé ssh'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        return interaction.reply('C:\ Users \ mgasp/.ssh');
    }
}