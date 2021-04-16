const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');
const PORT = process.env.PORT || 80;
var server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is listening at http://%s:%s", host, port);
});

client.on('ready', () => {
 client.user.setActivity("Generating Nitro!");
 console.log("Bot ("+client.user.tag+") Ready!");
 });
 
client.on("message", async message => {
  const prefix = "-";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "nitro"){
	var i = 0;
    while (i<6000) { //Number of messages
    var password = generator.generate({
    length: 16,
    numbers: true
});
	message.channel.send("https://discord.gift/" + password)
    i++;
	}
  }
})

client.login(process.env.token);
