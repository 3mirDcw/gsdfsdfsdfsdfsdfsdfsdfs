const db = require("quick.db"); 
const { MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args) => {
    let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta. Gold Üye Olmak İçin <@789796656290856981> E Yaz`) }

  
  if(!['ROL ID'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız !`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta  `))


  let tag = "TAG";
  
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`<a:Un1nv1ted_Elmas:808274183834042408> **Toplam Üye  ・ ${toplam}
  <a:fiber_sunglassesdance:813848566312730644> **Sesteki Üye** ・${ses}**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}