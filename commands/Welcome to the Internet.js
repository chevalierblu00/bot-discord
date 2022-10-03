const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bienvenue-sur-le-web')
        .setDescription('redirige vers Welcome to the Internet'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('youtube')
            .setStyle('LINK')
            .setURL('https://www.youtube.com/watch?v=k1BneeJTDcU&list=PL_4SjU9pZI8mGm1kICXcjftI1yq07Dn8A&index=22&ab_channel=boburnham')
        );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour écouter', components: [row] });
    }
}