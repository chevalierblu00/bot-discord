const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gup_1_2')
        .setDescription("redirige vers les deux premiere partie du film"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('GUP-1/2')
            .setStyle('LINK')
            .setURL('https://v5.anime-ultime.net/Girls-und-Panzer-Saishuushou-streaming-Film-01-video-vostfr-par-Houkago-Fansub')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}