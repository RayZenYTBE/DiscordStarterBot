const Discord = require("discord.js")
const fetch = require("node-fetch")
const client = new Discord.Client()

const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);//this is a script for your bot to run 24/7. Copy the link above Yo Boi!! and navigate to uptimerobot.com and read UROBOT file!

const prefix = require('discord-prefix');

//Set your prefix here!
let defaultPrefix = 'Your Prefix Here!';

client.on('message', (message) => {
    //stop code execution if message is received in DMs
    if (!message.guild) return;

    //get the prefix for the discord server
    let guildPrefix = prefix.getPrefix(message.guild.id);

    //set prefix to the default prefix if there isn't one
    if (!guildPrefix) guildPrefix = defaultPrefix;

    //rest of the message event
    let args = message.content.slice(guildPrefix.length).split(' ');
    if (!message.content.startsWith(guildPrefix)) return;
    if (args[0].toLowerCase() === 'Command Here!') {
        return message.channel.send('Command Output Here!');//Replace this text to your Command and your Command Output!
    };
});

client.on("ready", () => {
  console.log('Logged in as ${client.user.tag}!')
})//Once the message inside this bracket appear, it means that your bot is connected!

client.login(process.env.TOKEN)