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
       .setTitle(`<a:ykleniyor:752305324588793896> **Lydia Bot  Ekonomi Menüsüne Hoşgeldiniz** <a:ykleniyor:752305324588793896>`)
        .setDescription(`

  **» ${prefix}soygun** <a:sagok:749305875188940983> Soygun yaparsınız.
  **» ${prefix}profil** <a:sagok:749305875188940983> Profil bilgilerinizi gösterir.
  **» ${prefix}altın-yolla** <a:sagok:749305875188940983> İstediğiniz kişiye altın yollayabilirsiniz.
  **» ${prefix}altınal** <a:sagok:749305875188940983> Paranızla altın alıp marketten eşya satın alabilirsiniz.
  **» ${prefix}elmasal** <a:sagok:749305875188940983> Altınınızla elmas alıp marketten eşya satın alabilirsiniz.
  **» ${prefix}elmas-yolla** <a:sagok:749305875188940983> İstediğiniz kişiye elmas yollayabilirsiniz.
  **» ${prefix}günlük** <a:sagok:749305875188940983> Günlük maaşınızı verir.
  **» ${prefix}market** <a:sagok:749305875188940983> Eşya satın alabilirsiniz gösterir.
  **» ${prefix}meslek** <a:sagok:749305875188940983> Meslek sahibi olarak daha hızlı para kazanabilirsiniz
  **» ${prefix}para-yolla** <a:sagok:749305875188940983> İstediğiniz kişiye para yollayabilirsiniz.
  **» ${prefix}soygun** <a:sagok:749305875188940983> Etiketlediğiniz Kişiden Para Çalarsınız.
  **» ${prefix}kazı-kazan** <a:sagok:749305875188940983> Kazı kazan oynarsınız.
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
  aliases: ['ekonomi'],
  permLevel: 0,
};

exports.help = {
  name: 'ekonomi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'oyun'
};