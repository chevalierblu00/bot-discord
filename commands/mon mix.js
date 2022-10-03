const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mon-mix')
        .setDescription('redirige vers mon mix'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('youtube')
            .setStyle('LINK')
            .setURL('https://www.youtube.com/watch?v=MhgfMBzHvHk&list=RDMhgfMBzHvHk&start_radio=1&ab_channel=SamuelFarina')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}