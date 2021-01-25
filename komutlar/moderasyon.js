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
  **» <a:tamir:797015213634748436> ${prefix}giriş-çıkış-ayarla **  Resimli Hg-BB sistemini Açarsınız.
  **» <a:tamir:797015213634748436> ${prefix}giriş-çıkış-kapat **Ayarlanan Resimli Hg-BB Sistemini Kapatırsınız.
  **» <a:tamir:797015213634748436> ${prefix}güvenlik ** Resimli Güvenlik Sistemini Belirlediğiniz Kanal Yapar..
  **» <a:tamir:797015213634748436> ${prefix}güvenlik sıfırla ** Resimli Güvenlik Sistemini Kapatırsınız.
  **» <a:tamir:797015213634748436> ${prefix}capslock-engelleme **  CapsLock Engelleme Sistemini Açıp Kapatırsınız (İlk Yazışta Açar 2.de kapar)
  **» <a:tamir:797015213634748436> ${prefix}reklamengel**  Reklam Engel Sistemini Açar/Kapatırsınız.
  **» <a:tamir:797015213634748436> ${prefix}temizle **  Belirlenen Miktarda Mesaj Siler.
  **» <a:tamir:797015213634748436> ${prefix}sunucupanel **  Sunucu Panel Açar.
  **» <a:tamir:797015213634748436> ${prefix}bakım ** Kanalı Bakıma Alır (Perm Şart).
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» ShowTeam Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=794184837355274270&scope=bot&permissions=1074129984) **|** [Destek Sunucusu](https://discord.gg/TVxBQMtEBh) **|** [Oy Linki](Yakında..) **|** `)
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