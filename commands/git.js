const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commandes-git')
        .setDescription('renvoie la commande pourv les commandes git'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        return interaction.reply('cd = pour naviguer entre les differents dossiers / sl = ezdezdzed');
    }
}