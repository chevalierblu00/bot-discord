const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gup3')
        .setDescription("redirige vers la troisieme partie du film"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('GUP-3')
            .setStyle('LINK')
            .setURL('https://v5.anime-ultime.net/Girls-und-Panzer-Gekijouban-streaming-Film-01-video-vostfr-par-Houkago-Fansub')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}