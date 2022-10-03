const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('outlook')
        .setDescription("redirige vers outlook"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('outlook')
            .setStyle('LINK')
            .setURL('https://outlook.office.com/mail/inbox/id/AAQkADk2Y2ZlYzUwLWYwMzEtNDhkZS1iOTUyLWQ1ZWFmODU1NzgwNAAQAAv6f6pA32hCoiZP93eawAg%3D')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}