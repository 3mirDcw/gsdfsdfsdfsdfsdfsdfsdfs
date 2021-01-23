const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "488384549479251969") if(message.author.id !== "504704539585150986") return message.channel.send("<a:redke:763316512937082890> Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("<a:redke:763316512937082890> Bir kullanıcı belirtmelisin!")

message.channel.send("<a:onayke:763316512051691520> **"+cuser.tag+"** kullanıcısı başarıyla karalisteden çıkarıldı.")
const westra = new Discord.MessageEmbed()
.setColor(`GREEN`)
.setTimestamp()
.setDescription(`<a:onayke:763316512051691520> **${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
  cclient.channels.cache.get("752279641800179723").send(westra)
db.delete(`ckaraliste.${cuser.id}`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beyazliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
