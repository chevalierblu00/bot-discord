const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('only-my-railgun')
        .setDescription("redirige vers l'opening de only my railgun"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('youtube')
            .setStyle('LINK')
            .setURL('https://www.youtube.com/watch?v=UmnQ2fEoXUI&ab_channel=fripSide-Topic')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}