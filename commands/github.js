const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('redirige vers mon github'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('github')
            .setStyle('LINK')
            .setURL('https://github.com/')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour voir', components: [row] });
    }
}