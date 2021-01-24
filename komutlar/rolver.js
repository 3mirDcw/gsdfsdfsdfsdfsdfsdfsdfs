const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = function(client, message, args) {
    let kişi = message.mentions.members.first();
    let rol = message.mentions.roles.first();
    const kime = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('Rol Vermek İstediğin Kullanıcıyı Etiketlemelisin!')
    .setTimestamp()
    const hangirol = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('Hangi Rolü Vereceğimi Yazmalısın')
    .setTimestamp()
    const yetkiyok = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('Üzgünüm Bu Komutu Kullanmak İçin Yetkin Yok!')
    .setTimestamp()
    const basarili = new Discord.MessageEmbed()
    .setColor('00FF09')
    .setDescription(`**İşlem Başarılı ✅**\n\n${kişi} Adlı Kullanıcıya ${rol} Adlı Rolü Verdim!`)
    .setTimestamp()
 
    if (!message.member.hasPermission('<@803001559415390239>')) return message.channel.send(yetkiyok)
    if (!kişi) return message.channel.send(kime)
    if (!rol) return message.channel.send(hangirol)
 
    kişi.roles.add(rol)
    message.channel.send(basarili)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'rolver'
};  