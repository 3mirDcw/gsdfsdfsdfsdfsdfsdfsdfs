const Discord = require("discord.js")
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {
  
let yetkisiz = new Discord.MessageEmbed() 
.setDescription('Bu Komutu Kullanabilmek için **Yönetici** Yetkin Olmalı!')
.setColor('RED') 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetkisiz) 

const prefix = ayarlar.prefix

db.delete(`jailrol.${message.guild.id}`);
db.delete(`jailyetkili.${message.guild.id}`);
db.delete(`jailkanal.${message.guild.id}`);

await message.channel.send('✅ Jail Sistemi Kapatıldı, Tüm Ayarlar Sıfırlandı.')

};
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["jail-sistemi-kapat","jail-sistemi-sıfırla"],
    permLevel: 0
  };
  
  module.exports.help = {
    name: 'jailsistemi-kapat'
  };