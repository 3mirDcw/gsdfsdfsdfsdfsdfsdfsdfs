const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let teamtr = message.mentions.users.first();
    if (!teamtr) return message.channel.send('<a:by:752306236606906399>**Çıkma Teklif Edeceğin Kişiyi Seçsene **');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti!❤️:heart: ')
    .addField('Ne Cevap Vericen Acaba Bende Merak Ettim😆', `Hadi Kabul Et Bence`)
    .addField('Teklif Eden Kişi :', `➽ @${message.author.username}`)
    .setFooter('Çıkma Teklifi Doktor•Bot')
    teamtr.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Çıkma Teklifi Ettin :heart_eyes: ')
    .setFooter('Çıkma Teklifi |Doktor•Bot')
    message.channel.send(dmtamam);
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet",'teklifet','çte'],
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklifi-et',
  description: 'Özel komut.',
  usage: 'çıkma-teklifi-et'
};