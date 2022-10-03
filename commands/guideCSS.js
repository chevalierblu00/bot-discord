const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guide-css')
        .setDescription('redirige vers CSS tricks'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('site')
            .setStyle('LINK')
            .setURL('https://css-tricks.com/guides/')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour écouter', components: [row] });
    }
}