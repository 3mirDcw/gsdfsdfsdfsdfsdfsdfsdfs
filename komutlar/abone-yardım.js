const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`ShowTeam - Abone`)
       .setDescription(`
       <:youtube:798553696426393600> **!abone-log <#kanal> : **Abone Logunu Ayarlarsınız.
       <:youtube:798553696426393600> **!abone-yetkili <@rol> : **Abone Yetkilisini Ayarlarsınız.
       <:youtube:798553696426393600> **!abone-rol <@rol> : **Abone Rolünü Ayarlarsınız.
       <:youtube:798553696426393600> **!abone <@kullanıcı> : **Belirttiğiniz Kullanıcıya Abone Rolü Verirsiniz. 
`)
       
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-yardım"],
  permLevel: 0,
};
exports.help = {
  name: 'abone-yardım',
  description: '',
  usage: ''
};