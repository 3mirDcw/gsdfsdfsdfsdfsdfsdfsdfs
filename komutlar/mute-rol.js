const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<a:by:748515598765391933> Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
let rol = db.fetch(`muterol_${message.guild.id}`)  
  if (!rol) return message.channel.send(`<a:by:748515598765391933> Mute Rolü Ayarlanmamış!`)
  message.channel.send(`<a:hg:748304066794356767> Mute Rolü Sıfırlandı!`)
db.delete(`muterol_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(`<a:by:748515598765391933> Ayrlayacağınız Mute Rolü Belirtiniz!`)

db.set(`muterol_${message.guild.id}`, rol.id)

message.channel.send(`<a:hg:748304066794356767> Mute Rolü ${rol} Olarak Ayarlandı!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['muterol'],
  permlevel: 0
}
exports.help = {
  name: 'mute-rol'
}