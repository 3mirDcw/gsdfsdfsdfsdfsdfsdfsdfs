const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Bu komutu kullanabilmek için \`Kullanıcı Adlarını Yönet\` yetkisine sahip olmalısın.`)

message.guild.members.cache.forEach(devtr => {
devtr.setNickname(null) //Bu Kod Satırı 26 Ekim 2020 Tarihinde xFalcon Tarafından Değiştirildi. Artık İsimleri Normalde Olması Gerektiği Gibi Sıfırlıyor, Eskiden Kullanının İsmini Nick Yapıyordu. İyi Günler.
 })
  message.channel.send(`Sunucudaki üyelerin ismi sıfırlandı. Tam sıfırlanmama ihtimaline karşın komutu yeniden kullanınız.`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isimleri-sıfırla', 'isimlerisıfırla'],
  permLevel: 0
};

exports.help = {
  name: 'herkesin-ismini-sıfırla',
  description: 'Sunucudaki her kullanıcının takma adını sıfırlar.',
  usage: 'herkesin-ismini-sıfırla'
};