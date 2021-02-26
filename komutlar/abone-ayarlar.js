const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
let aboneyetkili = await db.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await db.fetch(`abonelog.${message.guild.id}`)
let abonerol = await db.fetch(`abonerol.${message.guild.id}`)
  
let aboneyetkili1 = [];
  if(aboneyetkili) aboneyetkili1 = `✔️ | <@${aboneyetkili}>`
  if(!aboneyetkili) aboneyetkili1 = `✖️ | **Ayarlanmamış**`
  let abonerol1 = [];
  if(abonerol) abonerol1 = `✔️ | <@${abonerol}>`
  if(!abonerol) abonerol1 = `✖️ | **Ayarlanmamış**`
let abonelog1 = [];
  if(abonelog) abonelog1 = `✔️ | ${abonelog}`
  if(!abonelog) abonelog1 = `✖️ | **Ayarlanmamış**`
message.channel.send(new Discord.MessageEmbed()
.setColor("#0000FF")
.setTitle(`${message.guild.name} Sunucusu __**Abone Sistemi**__ Ayarları`)   
.addField(`**Abone Log**`, `${abonelog1}`,true)
.addField(`**Abone Yetkilisi**`, `${aboneyetkili1}`,true)       
.addField(`**Abone Rolü**`, `${abonerol1}`,true))
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ayarlar"],
  permLevel: 0
};
exports.help = {
  name: 'abone-ayarlar'
};