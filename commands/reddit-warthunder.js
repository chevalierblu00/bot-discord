const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warthunder')
        .setDescription('redirige vers le reddit warthunder'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('reddit')
            .setStyle('LINK')
            .setURL('https://www.reddit.com/r/Warthunder/')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour lire', components: [row] });
    }
}