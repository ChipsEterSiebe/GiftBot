const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
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
}).listen(process.env.PORT || 5000)

client.login(process.env.token);
