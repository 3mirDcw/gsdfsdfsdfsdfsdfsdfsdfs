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
       .setTitle(` **ShowTeam Bot  Gif Menüsüne Hoşgeldiniz** `)
        .setDescription(`
 
        **<a:B_Ileri:802635594169188382> ${prefix}gif-ara**  Yazdığınız Kelime Hakkında Gif Aratır!
        **<a:B_Ileri:802635594169188382> ${prefix}man-gif**  Rastgele Erkek Gifi Atar!
        **<a:B_Ileri:802635594169188382> ${prefix}woman-gif**  Rastgele Kadın Gifi Atar!
        **<a:B_Ileri:802635594169188382> ${prefix}couple-gif** Rastgele Sevgili Gifi Atar!
        **<a:B_Ileri:802635594169188382> ${prefix}baby-gif** Rastgele Bebek Gifi Atar!
        **<a:B_Ileri:802635594169188382> ${prefix}animal-gif**  Rastgele Hayvan Gifi Atar!
        **<a:B_Ileri:802635594169188382> ${prefix}marvel-gif** Rastgele Marvel Gifi Atar!
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

** <a:B_Ileri:802635594169188382>  ${prefix}davet __Botu Davet Edebilirsiniz!__**
** <a:B_Ileri:802635594169188382> ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
** \<a:B_Ileri:802635594169188382>${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
              .addField(`» ShowTeam Bot Bağlantıları`, `  ** [Destek Sunucusu](https://discord.gg/FQVadvq) **|** [Oy Linki](http://bit.ly/lydiaoy) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Gif-menü'],
  permLevel: 0,
};

exports.help = {
  name: 'gif-menü',
  description: 'a!davet-sistemi Menüsü',
  usage: 'gif-menü'
};