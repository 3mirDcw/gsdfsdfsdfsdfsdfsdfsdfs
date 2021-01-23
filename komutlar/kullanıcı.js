const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 

exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:yklenme:748514614870016072> **Lydia Bot  Kullanıcı Menüsüne Hoşgeldiniz** <a:yklenme:748514614870016072>`)
        .setDescription(`
  **» ${prefix}avatar** <a:sagok:749305875188940983> Avatarınızı Atar.
  **» ${prefix}sunucutanıt** <a:sagok:749305875188940983> Sunucunuzu Tanıtır.
  **» ${prefix}kullanıcı-bilgi** <a:sagok:749305875188940983> Etiketlediğiniz Kişinin Kullanıcı Bilgisini Gösterir.
  **» ${prefix}kanalbilgi ** <a:sagok:749305875188940983> Belirtilen Kanal Hakkında Bilgi Verir.
  **» ${prefix}davet** <a:sagok:749305875188940983> Botu Davet Edersiniz!
  **» ${prefix}korona ** <a:sagok:749305875188940983> Korona Hakkında Bilgi Alırsınız.
  **» ${prefix}id ** <a:sagok:749305875188940983> Etiketlediğiniz Kişini İD sini atar.
  **» ${prefix}mcskin ** <a:sagok:749305875188940983> İsmini Girdiğiniz Skini Fotosunu Atar.
  **» ${prefix}emoji-bilgi** <a:sagok:749305875188940983> İsmini Yazdığınız Emoji Hakkında Bilgi Alırsınız.
  **» ${prefix}saat ** <a:sagok:749305875188940983> Saati Gösterir.(Kendinde Bakabilirsin Ama)
  **» ${prefix}say** <a:sagok:749305875188940983> Sunucuda ki Üye Durumlarını Gösterir.
  **» ${prefix}sunucu-bilgi** <a:sagok:749305875188940983> Sunucu Hakkın da Bilgi Verir.
  **» ${prefix}sunucu-resim** <a:sagok:749305875188940983> Sunucunun İconunu Atar.
  **» ${prefix}yetkilerim** <a:sagok:749305875188940983> Sunucuda ki Yetkilerinizi Gösterir.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
               .addField(`» Lydia Bot Bağlantıları`, ` <a:alev:752289999642296370> [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=696458462187618315&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/FQVadvq) **|** [Oy Linki](http://bit.ly/lydiaoy) **|** <a:alev:752289999642296370>`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kullanıcı'
};