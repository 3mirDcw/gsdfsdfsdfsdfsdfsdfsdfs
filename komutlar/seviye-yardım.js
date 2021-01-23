const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
const db = require("quick.db");
let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:752305324588793896> **Lydia Bot Seviye Menüsüne Hoşgeldiniz** <a:ykleniyor:752305324588793896>`)
        .setDescription(`
 
  **» ${prefix}seviye** <a:sagok:749305875188940983> Mevcut Olduğunuz Seviyeyi Gösterir.
  **» ${prefix}seviye-ayarlar** <a:sagok:749305875188940983> Sunucuda Aktif Olan Seviye Ayarlarını Gösterir.
  **» ${prefix}seviye-rol** <a:sagok:749305875188940983> İstenilen Seviyeye Gelince Verilecek Rolü Ayarlar.
  **» ${prefix}seviye-sıfırla ** <a:sagok:749305875188940983> Mevcut Seviye Sistemini Sıfırlar
  **» ${prefix}seviye-sınır ** <a:sagok:749305875188940983> Maksimum Kazanılanabilecek Seviyeyi Belirler.
  **» ${prefix}seviye-xp ** <a:sagok:749305875188940983> Bir Mesaj Başına Verilecek Xp yi ayarlar.
  **» ${prefix}seviye-top ** <a:sagok:749305875188940983> Sunucuda ki En yüksek 5 Kişiyi Gösterir
  **» ${prefix}seviye-rütbeler ** <a:sagok:749305875188940983> Hangi Seviye de Rol Verilecek Onu Gösterir.
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
  aliases: ['seviye-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'seviye-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'seviye-yardım'
};