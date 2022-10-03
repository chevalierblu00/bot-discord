const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('surf')
        .setDescription('redirige vers le site pour surfer'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('site web')
            .setStyle('LINK')
            .setURL('https://fr.magicseaweed.com/France-Surf-Forecast/2/')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour voir', components: [row] });
    }
}