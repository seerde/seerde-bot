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
  if (msg.content.includes(process.env.COM1)) {
    msg.mentions.users.forEach((e) => {
      if (e.username == "Seerde") {
        msg.reply(process.env.BOSS);
      } else {
        msg.reply(e.displayAvatarURL());
      }
    });
  }
  if (msg.content.includes(process.env.COM2)) {
    msg.mentions.users.forEach((e) => {
      if (e.username == "Seerde") {
        msg.reply(process.env.BOSS);
      } else {
        for (let i = 0; i < 10; i++) {
          setTimeout(function () {
            e.send("سلام");
          }, 500);
        }
      }
    });
  }
});

client.login(process.env.TOKEN);
