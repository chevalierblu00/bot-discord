const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tamo-daleko')
        .setDescription('redirige vers Tamo daleko'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('youtube')
            .setStyle('LINK')
            .setURL('https://www.youtube.com/watch?v=qxZuNz68AXo&ab_channel=SamuelFarina')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour écouter', components: [row] });
    }
}