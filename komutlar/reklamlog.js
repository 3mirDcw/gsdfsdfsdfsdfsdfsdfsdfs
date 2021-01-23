
  exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
//
       if (!db.has(`premod_${message.guild.id}`) == true) {
    
      const westrabumbeyyy = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`<a:redke:763316512937082890> Bu sunucuda premium mod aktif değil. Bu yüzden bu komutu kullanamazsınız.`)
      return message.channel.send(westrabumbeyyy)

    
  } else {
  
    //
  const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`<a:redke:763316512937082890> **HATA** <a:redke:763316512937082890> - Bu Sunucuda Yetkili Değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`<a:redke:763316512937082890> **HATA** <a:redke:763316512937082890> - Bir Kanal Etiketle.`)
      if(reklam) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`reklam.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(`<a:onayke:763316512051691520> **Başarılı ile reklam log kanalı ayarlandı.** <a:onayke:763316512051691520>`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
     message.channel.send(`<a:redke:763316512937082890> **Reklam engel açık değil.** <a:redke:763316512937082890>`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-log"],
  permLevel: 0
};

exports.help = {
  name: 'reklamlog',
  description: 'WESTRA',
  usage: 'WESTRA'
}