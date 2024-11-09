const { SlashCommandBuilder } = require("discord.js");
const { currentDate } = require("../../handyman.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('A test command for the bot.'),
    async execute(interaction) {
        await interaction.reply('Test!');
        console.log(`[${currentDate()}]: @${interaction.user.username} executed /test`);
    }
}