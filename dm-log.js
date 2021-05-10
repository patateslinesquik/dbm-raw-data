const Discord = require("discord.js");
const dm = client.channels.cache.get("channelid");
if(tempVars("mesaj").channel.type === "dm") {
if(tempVars("mesaj").author.bot) {
}
else if(tempVars("mesaj").author.id === client.user.id) {
}
else {
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username}`)
.setTimestamp()
.setColor("RANDOM")
.setThumbnail(`${tempVars("mesaj").author.avatarURL()}`)
.addField("Gönderen", tempVars("mesaj").author.tag)
.addField("Gönderen ID", tempVars("mesaj").author.id)
.addField("Gönderilen Mesaj", tempVars("mesaj").content);
dm.send(botdm);
}
}