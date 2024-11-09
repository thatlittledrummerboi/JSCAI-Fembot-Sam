const { SlashCommandBuilder } = require("discord.js");
const { admins } = require('../../config.json');
const { currentDate } = require('../../handyman.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kill")
        .setDescription("Kill the bot"),
    async execute(interaction) {
        let pass = false;
        if (admins.includes(interaction.user.id)) {
            pass = true;
            await interaction.reply(`ni ni :3`);
            console.log(`[${currentDate()}]: \@${interaction.user.username} executed /kill; pass = ${pass}`);
            process.exit();
        } else {
            await interaction.reply(`you dont have perms to use this command`);
            console.log(`[${currentDate()}]: \@${interaction.user.username} executed /kill; pass = ${pass}`);
        }
    },
};
