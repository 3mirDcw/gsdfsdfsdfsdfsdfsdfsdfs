const Discord = require('discord.js')
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
let shardinfo = {
        ping: await client.shard.fetchClientValues('ws.ping'),
        server_count: await client.shard.fetchClientValues('guilds.cache.size'),
        user_count: await client.shard.fetchClientValues('users.cache.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = message.guild.shardID
    let ashira = new Discord.MessageEmbed()
    .setTitle('Shard bilgi')
    .setFooter(`Bu sunucunun shardı: ${i+1}`)
    .setColor('BLUE')
      .setThumbnail(client.user.avatarURL())
    for(i=0;i<client.shard.count;i++) {
        ashira.addField(`Shard: ${i+1} | Ping: ${Math.round(shardinfo.ping[i])}ms `, ` ${shardinfo.server_count[i]} sunucu ve ${shardinfo.user_count[i]} kullanıcı\nUptime: ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} `)
    }
    const ayarlar = require("../ayarlar.json");
    message.channel.send(ashira
      .setDescription(
      `Sanırım bir sorun var! Bunu yetkililere bildir!\nHemen <@789796656290856981>e dm at!`/// Kendiniz Düzenleyin.
    )
    .setColor("RED")
    .setThumbnail(client.user.avatarURL())
    .setTimestamp());
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["shardbilgi"],
  permLevel: 0,
  kategori: "bot",
};
 
exports.help = {
  name: 'shard',
  description: 'Botun shardını gösterir.',
  usage: 'shardbilgi',
 
};