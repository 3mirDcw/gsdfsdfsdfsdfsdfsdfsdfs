const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:752305324588793896> **Lydia Bot Koruma Menüsüne Hoşgeldiniz** <a:ykleniyor:752305324588793896>`)
        .setDescription(`

  **» ${prefix}ban-koruma #kanal** <a:sagok:749305875188940983> Sunucudan Birini Banlayan Kişiyi Sunucudan Atar Ve Banlananın Banını Açar
  **» ${prefix}ban-koruma-sıfırla ** <a:sagok:749305875188940983> Ayarlanan Ban Koruma Sistemini Sıfırlar.
  **» ${prefix}kanal-koruma #kanal** <a:sagok:749305875188940983> Sunucuda Açılan veya Kapatılan Kanalı Otomatik Kapatır Veya Açar.
  **» ${prefix}kanal-koruma-sıfırla** <a:sagok:749305875188940983> Ayarlanan Kanal Koruma Sistemini Sıfırlar.
  **» ${prefix}rol-koruma #kanal ** <a:sagok:749305875188940983> Sunucuda Açılan veya Kapatılan Rolü Otomatık Kapatır Veya Açar.
  **» ${prefix}rol-koruma-sıfırla ** <a:sagok:749305875188940983> Ayarlanan Rol Koruma Sistemini Sıfırlar.
  **» ${prefix}spam ** <a:sagok:749305875188940983> Spam engel açar.
  **» ${prefix}spamkapat ** <a:sagok:749305875188940983> Spam engel kapatır.
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
  aliases: ['koruma-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'koruma-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};