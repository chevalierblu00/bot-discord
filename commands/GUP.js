const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gup')
        .setDescription("redirige vers le site de l'animer GUP"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('GUP')
            .setStyle('LINK')
            .setURL('https://v5.anime-ultime.net/Girls-und-Panzer-streaming-Episode-08-vostfr-par-TNR-Fansub.html')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}