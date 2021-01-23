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
       .setTitle(`<a:ykleniyor:752305324588793896> **Lydia Bot Moderasyon Menüsüne Hoşgeldiniz** <a:ykleniyor:752305324588793896>`)
        .setDescription(`<a:YanpSnennleGif:753288587629297735> ${prefix}moderasyon2 Menümüze Bakmayı Unutmayın. <a:YanpSnennleGif:753288587629297735>
  **» ${prefix}giriş-çıkış-ayarla ** <a:sagok:749305875188940983> Resimli Hg-BB sistemini Açarsınız.
  **» ${prefix}giriş-çıkış-kapat ** <a:sagok:749305875188940983> Ayarlanan Resimli Hg-BB Sistemini Kapatırsınız.
  **» ${prefix}güvenlik ** <a:sagok:749305875188940983> Resimli Güvenlik Sistemini Belirlediğiniz Kanal Yapar..
  **» ${prefix}güvenlik sıfırla ** <a:sagok:749305875188940983> Resimli Güvenlik Sistemini Kapatırsınız.
  **» ${prefix}capslock-engelleme ** <a:sagok:749305875188940983> CapsLock Engelleme Sistemini Açıp Kapatırsınız (İlk Yazışta Açar 2.de kapar)
  **» ${prefix}küfürengel** <a:sagok:749305875188940983> Küfür Sistemini Açar/Kapatırsınız.
  **» ${prefix}reklamengel** <a:sagok:749305875188940983> Reklam Engel Sistemini Açar/Kapatırsınız.
  **» ${prefix}temizle ** <a:sagok:749305875188940983> Belirlenen Miktarda Mesaj Siler.
  **» ${prefix}sunucupanel ** <a:sagok:749305875188940983> Sunucu Panel Açar.
  **» ${prefix}unban ** <a:sagok:749305875188940983>İdsi Girelen Kullanıcıyı Banının Açar.
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
  aliases: ['Moderasyon'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};