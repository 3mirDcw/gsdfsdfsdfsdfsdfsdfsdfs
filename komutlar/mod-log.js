const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`<a:by:748515598765391933> Modlog Kanalı Zaten ayarlı değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`<a:hg:748304066794356767> ModLog Kanalı başarıyla sıfırlandı.`);
    return
  }
  //Darkcode
if (!logk) return message.channel.send(`<a:by:748515598765391933> Yanlış Kullanım Doğru Kullanım: !mod-log #kanal`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`<a:hg:748304066794356767> Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`);
 message.react('607634966959882250')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı','d'],
    permLevel: 3,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};