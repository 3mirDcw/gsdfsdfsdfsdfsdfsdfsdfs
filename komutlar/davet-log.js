const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

 if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('<a:by:752306236606906399> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! ')
	
if (args[0] === 'sıfırla') {
  let seviyelog = db.fetch(`davetlog_${message.guild.id}`)
  if (!seviyelog) return message.channel.send(`<a:by:752306236606906399> Davet Logu Zaten Ayarlanmadığı İçin Sıfırlanamaz! `)
  message.channel.send(`<a:hg:752305081545916438> Davet Log Kanalı Başarıyla Sıfırlandı!`)
  db.delete(`davetlog_${message.guild.id}`)
  return;
}

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(`<a:by:752306236606906399> Davet Logu Belirtmelisin! `)

db.set(`davetlog_${message.guild.id}`, kanal.id)

message.channel.send(`<a:hg:752305081545916438> Davet Logunu ${kanal} Olarak Ayarladım!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'davet-log'
}