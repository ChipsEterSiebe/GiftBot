const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

client.on("ready", () => {
  client.user.setActivity(`Currently in ${client.guilds.cache.size} server(s)`);
  console.log("Bot (" + client.user.tag + ") Ready!");
});

function randomString(length) {
  var result = "";
  chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

client.on("message", async (message) => {
  const prefix = "-";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "nitro") {
    codes = [];
    for (let i = 0; i <= 6000; i++) {
      codes.push("discord.gift/" + randomString(16));
      if (i >= 6000) {
        message.channel.send(
          message.author.toString() + " Check Your DM's for the codes"
        );
        fname = randomString(5) + "codes.txt";
        fs.writeFileSync(__dirname + "/" + fname, codes.join("\n"));
        message.author.send({ files: [__dirname + "/" + fname] }).then(() => {
          fs.unlinkSync(__dirname + "/" + fname);
          console.log("Sent 6,000 codes to " + message.author.tag);
        });
      }
    }
  }
});

client.login(process.env.token);