const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gmail')
        .setDescription("redirige vers gmail"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('gmail')
            .setStyle('LINK')
            .setURL('https://mail.google.com/mail/u/0/#inbox')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}