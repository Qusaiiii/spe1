
let spam = msg.guild.channels.find('name', 'spam');

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        spam.send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 500);

client.login(process.env.BOT_TOKEN); 
