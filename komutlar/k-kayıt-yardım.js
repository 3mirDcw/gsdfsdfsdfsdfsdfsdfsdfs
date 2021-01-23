const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db =  require("quick.db");
const talkedRecently = new Set();

let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:752305324588793896> **Lydia Bot Kayıt Menüsüne Hoşgeldiniz** <a:ykleniyor:752305324588793896>`)
        .setDescription(`
 
  **» ${prefix}alınacak-rol** <a:sagok:749305875188940983> Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.
  **» ${prefix}alınacak-rol sıfırla ** <a:sagok:749305875188940983> Kayıt Edilen Kişiden Alınacak Rolü Sıfırlar.
  **» ${prefix}kayıt-kanal** <a:sagok:749305875188940983> Kayıtın Yapılacağı Kanalı Belirlersiniz.
  **» ${prefix}kayıt-kanal sıfırla** <a:sagok:749305875188940983> Kayıtın Yapılacağı Kanalı Sıfırlarsınız.
  **» ${prefix}kayıt-hg ** <a:sagok:749305875188940983> Gelen Kullanıcılara Kayıt Bilgisi Verir.
  **» ${prefix}kayıt-hg sıfırla ** <a:sagok:749305875188940983> Kayıt Hg sistemini sıfırlar.
  **» ${prefix}kayıt-yetkili** <a:sagok:749305875188940983> Kayıt Edebilecek Yetkiyi Ayarlar.
  **» ${prefix}kayıt-yetkili sıfırla** <a:sagok:749305875188940983> Kayıt Edebilecek Yetkiyi Sıfırlar.
  **» ${prefix}erkek-rol ** <a:sagok:749305875188940983> Kayıt Edilince Verilecek Erkek Rolü Ayarlar.
  **» ${prefix}erkek-rol sıfırla ** <a:sagok:749305875188940983> Kayıt Edilince Verilecek Erkek Rolünü Sıfırlar.
  **» ${prefix}kız-rol** <a:sagok:749305875188940983> Kayıt Edilince Verilecek Kız Rolü Ayarlar.
  **» ${prefix}kız-rol sıfırla** <a:sagok:749305875188940983> Kayıt Edilince Verilecek Kız Rolünü Sıfırlar.
  **» ${prefix}erkek ** <a:sagok:749305875188940983> Erkekleri Kayıt Etmeye Yarar.
  **» ${prefix}kız ** <a:sagok:749305875188940983> Kızları Kayıt Etmeye Yarar.
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
  aliases: ['kayıt-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};