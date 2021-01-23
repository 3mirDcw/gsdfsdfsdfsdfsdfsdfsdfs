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
       .setTitle(` **ShowTeam Bot Moderasyon Menüsüne Hoşgeldiniz** `)
        .setDescription(` ${prefix}moderasyon2 Menümüze Bakmayı Unutmayın. 
  **» 🔨 ${prefix}giriş-çıkış-ayarla **  Resimli Hg-BB sistemini Açarsınız.
  **» 🔨 ${prefix}giriş-çıkış-kapat **Ayarlanan Resimli Hg-BB Sistemini Kapatırsınız.
  **» 🔨 ${prefix}güvenlik ** Resimli Güvenlik Sistemini Belirlediğiniz Kanal Yapar..
  **» 🔨 ${prefix}güvenlik sıfırla ** Resimli Güvenlik Sistemini Kapatırsınız.
  **» 🔨 ${prefix}capslock-engelleme **  CapsLock Engelleme Sistemini Açıp Kapatırsınız (İlk Yazışta Açar 2.de kapar)
  **» 🔨 ${prefix}küfürengel**  Küfür Sistemini Açar/Kapatırsınız.
  **» 🔨 ${prefix}reklamengel**  Reklam Engel Sistemini Açar/Kapatırsınız.
  **» 🔨 ${prefix}temizle **  Belirlenen Miktarda Mesaj Siler.
  **» 🔨 ${prefix}sunucupanel **  Sunucu Panel Açar.
  **» 🔨 ${prefix}unban ** İdsi Girelen Kullanıcıyı Banının Açar.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» ShowTeam Bot Bağlantıları`, `  [Bot Davet Linki](discord.com/oauth2/authorize?client_id=794184837355274270&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/TVxBQMtEBh) **|** [Oy Linki](Yakında..) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};