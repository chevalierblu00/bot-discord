const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('linkdin')
        .setDescription('redirige vers mon linkdin'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('linkdin')
            .setStyle('LINK')
            .setURL('https://www.linkedin.com/in/martin-gaspard-b4596b223/')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour voir', components: [row] });
    }
}