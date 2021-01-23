const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let nemesis = await db.fetch(`premod_${message.guild.id}`)
  let nemesisYazi;
  if (nemesis == null) nemesisYazi = ' <a:redke:763316512937082890> Bu sunucuda premium mod aktif değil.'
  if (nemesis == 'aktif') nemesisYazi = '<a:onayke:763316512051691520> Bu sunucu için premium mod aktif.'
  if (nemesis == 'deaktif') nemesisYazi = '<a:redke:763316512937082890> Bu sunucuda premium mod aktif değil.'
  const embed = new Discord.MessageEmbed()
  .setTitle('Lydia - Premium Kontrol')
  .setColor("BLUE")
  .setDescription(nemesisYazi)
  message.channel.send(embed)
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["premiumkontrol"],
    permLevel: 0,
}

exports.help = {
    name: 'premium-kontrol',
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontorol'
}