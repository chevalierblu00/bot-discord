const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('twitter-warthunder')
        .setDescription('redirige vers le twitter warthunder'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('twitter')
            .setStyle('LINK')
            .setURL('https://twitter.com/WarThunder?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}