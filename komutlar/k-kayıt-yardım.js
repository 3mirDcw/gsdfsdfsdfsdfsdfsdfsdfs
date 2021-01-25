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
       .setTitle(` **ShowTeam Bot Kayıt Menüsüne Hoşgeldiniz** `)
        .setDescription(`
 
  **» <a:muzik:693407995731640340> ${prefix}alınacak-rol**  Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.
  **» <a:muzik:693407995731640340> ${prefix}alınacak-rol sıfırla **  Kayıt Edilen Kişiden Alınacak Rolü Sıfırlar.
  **» <a:muzik:693407995731640340> ${prefix}kayıt-kanal** Kayıtın Yapılacağı Kanalı Belirlersiniz.
  **» <a:muzik:693407995731640340> ${prefix}kayıt-kanal sıfırla** Kayıtın Yapılacağı Kanalı Sıfırlarsınız.
  **» <a:muzik:693407995731640340> ${prefix}kayıt-hg **  Gelen Kullanıcılara Kayıt Bilgisi Verir.
  **» <a:muzik:693407995731640340> ${prefix}kayıt-hg sıfırla **  Kayıt Hg sistemini sıfırlar.
  **» <a:muzik:693407995731640340> ${prefix}kayıt-yetkili** Kayıt Edebilecek Yetkiyi Ayarlar.
  **» <a:muzik:693407995731640340> ${prefix}kayıt-yetkili sıfırla**  Kayıt Edebilecek Yetkiyi Sıfırlar.
  **» <a:muzik:693407995731640340> ${prefix}erkek-rol **  Kayıt Edilince Verilecek Erkek Rolü Ayarlar.
  **» <a:muzik:693407995731640340> ${prefix}erkek-rol sıfırla **  Kayıt Edilince Verilecek Erkek Rolünü Sıfırlar.
  **» <a:muzik:693407995731640340> ${prefix}kız-rol**  Kayıt Edilince Verilecek Kız Rolü Ayarlar.
  **» <a:muzik:693407995731640340> ${prefix}kız-rol sıfırla**  Kayıt Edilince Verilecek Kız Rolünü Sıfırlar.
  **» <a:muzik:693407995731640340> ${prefix}erkek **  Erkekleri Kayıt Etmeye Yarar.
  **» <a:muzik:693407995731640340> ${prefix}kız **  Kızları Kayıt Etmeye Yarar.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-yardım',
  description: '!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};