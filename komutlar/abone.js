let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`Abone rolü ayarlanmamış!`)
  if(!abonelog) return message.channel.send(`Abone log kanalı ayarlanmamış!`)
  if(!aboneyetkilisi) return message.channel.send(`Abone yetkili rolü ayarlanmamış!`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  await(abonekisi.roles.add(abonerol))
  message.author.send(`Kullanıcıya abone rolünü başarıyla verdin.`)
  const embed = new Discord.MessageEmbed()
  .setTitle(`Abone Rolü Verildi!`)
  .addField(`Abone Rolünü Veren Kişi:`, `Adı:${message.author.tag} İD:${message.author.id}`, true)
  .addField(`Abone Rolü Verilen Kişi`, `${user}`, true)
  .addField(`Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
  .setColor(`BLUE`)
  .setFooter(`${client.user.username} Abone Sistemi`)
  message.guild.channels.cache.get(abonelog).send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['a'],
  perm: 0
}
exports.help = {
  name: 'abone'
}

exports.play = {
  kullanım: '',
  açıklama: ''
}