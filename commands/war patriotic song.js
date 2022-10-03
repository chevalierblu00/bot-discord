const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('war-patriotic-song')
        .setDescription('redirige vers war patriotic song'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('youtube')
            .setStyle('LINK')
            .setURL('https://www.youtube.com/watch?v=MhgfMBzHvHk&list=PL_4SjU9pZI8lMXcTtZixQQaxbA5umPkwx&ab_channel=SamuelFarina')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}