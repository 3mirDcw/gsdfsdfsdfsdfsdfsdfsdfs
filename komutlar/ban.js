const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(`<a:red:802835418236059658> Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın!`);
  
 let kullanici = message.mentions.users.first()
 if(!kullanici) return message.channel.send("<a:red:802835418236059658> Banlayacağın kişiyi etiketlemelisin!")

const embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`<a:kurtbanned:693842563886743652> ${kullanici.tag} adlı kullanıcı banlandı.`)
.setImage(`https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif?itemid=8540509`)
message.channel.send(embed)
  message.guild.members.ban(kullanici)
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0,
    kategori: "moderasyon",
    };
      
    exports.help = {
        name: 'ban',
        description: 'ban',
        usage: 'ban',
    
    };