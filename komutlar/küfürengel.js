
 exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
  
    let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`<a:redke:763316512937082890> **HATA** <a:redke:763316512937082890> - Bu Sunucuda Yetkili Değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(küfür) {
      db.delete(`küfür.${message.guild.id}`)
      message.channel.send(`<a:redke:763316512937082890> **Başarılı ile küfür engel kapandı.** <a:redke:763316512937082890>`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
      db.set(`küfür.${message.guild.id}.durum`,true)
      message.channel.send(`<a:onayke:763316512051691520> **Başarılı ile küfür engel açıldı. ** <a:onayke:763316512051691520>`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür-engel"],
  permLevel: 0
};

exports.help = {
  name: 'küfürengel',
  description: 'WESTRA',
  usage: 'WESTRA'
}