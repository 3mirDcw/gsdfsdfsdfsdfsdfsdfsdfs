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
        .setDescription(`
  **» ${prefix}mod-log** <a:sagok:749305875188940983> Mod-Log Kanalını Belirlersiniz.
  **» ${prefix}mod-log kapat** <a:sagok:749305875188940983> Ayarlanan Mod-Log Kanalı Kapatılır.
  **» ${prefix}oylama ** <a:sagok:749305875188940983> Oylama Yaparsınız
  **» ${prefix}yasaklı-tag ** <a:sagok:749305875188940983> Yasaklı Tag Ayarlar.
  **» ${prefix}otorol-ayarla** <a:sagok:749305875188940983> Otorol Ayarlar.
  **» ${prefix}otorol-mesaj** <a:sagok:749305875188940983> Otorol Mesajı Ayarlar.
  **» ${prefix}otorol-sıfırla** <a:sagok:749305875188940983> Otorol Sıfırlar.
  **» ${prefix}sayaç-ayarla** <a:sagok:749305875188940983> Sayaç Ayarlar.
  **» ${prefix}ban ** <a:sagok:749305875188940983> Etiketlenen Kullanıcıyı Banlar.
  **» ${prefix}kick ** <a:sagok:749305875188940983> Etiketlenen Kullanıcıyı Kickler.
  **» ${prefix}sa-as aç ** <a:sagok:749305875188940983> SA-AS Sistemini Açar.
  **» ${prefix}sa-as kapat ** <a:sagok:749305875188940983> SA-AS Sistemini Kapatır.
  **» ${prefix}emoji-ekle ** <a:sagok:749305875188940983> Emoji Ekler.
  **» ${prefix}çekiliş ** <a:sagok:749305875188940983> Çekiliş yaparsınız.
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
  aliases: ['Moderasyon2'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon2',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};