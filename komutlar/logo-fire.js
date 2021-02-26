const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text="+isim
  const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fire", "firelogo"],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'fire-logo',
  description: 'Logo Yaparsınız',
  usage: ''
};