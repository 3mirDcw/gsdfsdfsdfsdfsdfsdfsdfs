

const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.reply('<a:by:706589001091383347> Bana Birşeyler Yazdırmalısın <a:by:706589001091383347>');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor(0xD97634)
    .setDescription(`**${mesaj}**`)
    return message.channel.send(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 3
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'


};
 