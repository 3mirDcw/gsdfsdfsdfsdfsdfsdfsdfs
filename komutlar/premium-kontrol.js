const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let nemesis = await db.fetch(`premod_${message.guild.id}`)
  let nemesisYazi;
  if (nemesis == null) nemesisYazi = ' Bu sunucuda premium mod aktif değil.'
  if (nemesis == 'aktif') nemesisYazi = ' Bu sunucu için premium mod aktif.'
  if (nemesis == 'deaktif') nemesisYazi = ' Bu sunucuda premium mod aktif değil.'
  const embed = new Discord.MessageEmbed()
  .setTitle('ShowTeam- Premium Kontrol')
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