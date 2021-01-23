const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<a:by:752306236606906399> Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
 
  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("<a:by:752306236606906399> Bir kanal etiketleyin");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  //var i = db.set(`capsE_${message.guild.id}`, "acik")
  message.channel.send(`<a:hg:752305081545916438> ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `);
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gç-ayarla"],
  permLevel: 0
};
 
exports.help = {
  name: "giriş-çıkış-ayarla",
  description: "Giriş Çıkış Kanalını Ayarlar.",
  usage: "gç-ayarla <#kanal>"
};
 