require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  if (message.content === "افشخ الشي") {
    message.reply(message.author.displayAvatarURL());
  }
});

client.login(process.env.TOKEN);
