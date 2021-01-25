const Discord = require('discord.js')
exports.run = async (client, message, args, level) => {
// message.delete(3000)
  try {
    let bk = ["Bulunamadı!"]
    const embed = new Discord.MessageEmbed()
    .setTitle(`Greedy - Komut Sayısı `)
    //.addField(`Bot Bakımdamı ?` , "hayır")
    .setDescription('**\nToplam**  **' + client.commands.size + '** **Komut Vardır!** \nBotda Bakımda Olan Komut Sayısı :', `${bk}`)
    .setColor("RANDOM")
    .setImage('https://media.discordapp.net/attachments/803189389374652426/803191624435892244/standard.gif')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL())

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komut-sayısı'
};