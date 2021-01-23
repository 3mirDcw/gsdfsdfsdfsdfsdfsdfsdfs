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
       .setTitle(`<a:yklenme:748514614870016072> **Lyida Bot  Eğlence Menüsüne Hoşgeldiniz** <a:yklenme:748514614870016072>`)
        .setDescription(`
 
        **${prefix}çıkma-teklif-et** <a:sagok:749305875188940983> Etiketlediğiniz Kişiye Çıkma Teklif Edersiniz.
        **${prefix}yumruk-at** <a:sagok:749305875188940983> Etiketlediğiniz Kişiye Yumruk Atarsınız.
        **${prefix}tersyazı** <a:sagok:749305875188940983> Yazdığınız Yazıyı Tersine Çevirir.
        **${prefix}sarıl** <a:sagok:749305875188940983> Etiketlediğiniz Kişiye Sarılırsınız.
        **${prefix}kralol** <a:sagok:749305875188940983> Kral Olursunuz.
        **${prefix}fbi** <a:sagok:749305875188940983> FBI Gif Atar
        **${prefix}espri** <a:sagok:749305875188940983> Rastgele Espri Atar.
        **${prefix}elyazısı** <a:sagok:749305875188940983> Yazdığınız Yazıyı El Yazısına Çevirir.
        **${prefix}doğrulukcesaret** <a:sagok:749305875188940983> Doğruluk Veya Cesaret Cümlesi Atar.
        **${prefix}banner** <a:sagok:749305875188940983> Yazdığınız YAZIYI Bannera Çevirir.
        **${prefix}aşkölçer** <a:sagok:749305875188940983> Etiketlediğiniz Kişiyle Aranızdaki Aşkı Ölçer. (Şaka Amaçlıdır)
	    **${prefix}tkm** <a:sagok:749305875188940983> Bot ile tkm Oynarsınız (t-k-m)
        **${prefix}ys** <a:sagok:749305875188940983> Yıldız Savaşı Oynarsınız')
        **${prefix}bg** <a:sagok:749305875188940983> Bilek Güreşi Oynarsınız
        **${prefix}1vs1** <a:sagok:749305875188940983> Düello Oynarsınız
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
  aliases: ['eğlence'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: 'a!davet-sistemi Menüsü',
  usage: 'eğlence'
};