const { Events } = require("discord.js");
const { currentDate } = require('../handyman.js');


module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`[${currentDate()}]: Ready! Logged in as ${client.user.tag}`);
    },
};
