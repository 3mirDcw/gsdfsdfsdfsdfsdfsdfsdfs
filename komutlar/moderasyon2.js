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
        .setDescription(`
  **» <a:altin1:797015226196688949> ${prefix}mod-log** Mod-Log Kanalını Belirlersiniz.
  **» <a:altin1:797015226196688949> ${prefix}mod-log kapat** Ayarlanan Mod-Log Kanalı Kapatılır.
  **» <a:altin1:797015226196688949> ${prefix}oylama ** Oylama Yaparsınız
  **» <a:altin1:797015226196688949> ${prefix}yasaklı-tag ** Yasaklı Tag Ayarlar.
  **» <a:altin1:797015226196688949> ${prefix}otorol-ayarla**Otorol Ayarlar.
  **» <a:altin1:797015226196688949> ${prefix}otorol-mesaj**Otorol Mesajı Ayarlar.
  **» <a:altin1:797015226196688949> ${prefix}otorol-sıfırla**Otorol Sıfırlar.
  **» <a:altin1:797015226196688949> ${prefix}sayaç-ayarla**Sayaç Ayarlar.
  **» <a:altin1:797015226196688949> ${prefix}ban ** Kullanıcıyı Banlar.
  **» <a:altin1:797015226196688949> ${prefix}kick ** Etiketlenen Kullanıcıyı Sunucudan Atar.
  **» <a:altin1:797015226196688949> ${prefix}sa-as aç **SA-AS Sistemini Açar.
  **» <a:altin1:797015226196688949> ${prefix}sa-as kapat ** SA-AS Sistemini Kapatır.
  **» <a:altin1:797015226196688949> ${prefix}emoji-ekle ** Emoji Ekler.
  **» <a:altin1:797015226196688949> ${prefix}çekiliş **Çekiliş yaparsınız.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» ShowTeam Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=794184837355274270&permissions=1604&scope=bot) **|** [Destek Sunucusu](https://discord.gg/TVxBQMtEBh) **|** [Oy Linki](Yakında)`)
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