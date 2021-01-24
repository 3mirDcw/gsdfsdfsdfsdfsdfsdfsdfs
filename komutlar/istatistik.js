const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
.setDescription(`${ client.user.username}`)
  .addField(`Bot Sahibi`, `<@789796656290856981>`, true)
.addField(`Bot Geliştiricisi`, `<@740586033770528820> & <@738367168961577020>`, true)
    .addField("<a:bekle:797015223366189086>Bellek Kullanımı<a:bekle:797015223366189086>", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("<a:7940_FlyingHearts:802635599881437244>Sunucu Sayısı<a:7940_FlyingHearts:802635599881437244>", `${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("<a:B_Dikkat:802635594088972298>Toplam Kullanıcı Sayısı<a:B_Dikkat:802635594088972298>", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("<:1807_NitroDiamond:802635582521737217>Kanal Sayısı<:1807_NitroDiamond:802635582521737217>", `${client.channels.cache.size.toLocaleString()}`, true)
  .addField(`<a:online:797015220895612958>Ne Kadar Süredir Aktif<a:online:797015220895612958>`, `${duration}`, true)
  .addField("<a:load:797015222316564510>Ping<a:load:7970152223165>64510>", `${client.ws.ping}`, true)
  .addField("<a:HaraketliEmoji198:802849819604680725>Discord.js Sürümü<a:HaraketliEmoji198:802849819604680725>", `${Discord.version}`, true)
  .addField(`Destek Sunucum`, `[Tıkla](https://discord.gg/R39XmwyegZ)`, true)
  .addField(`Botu Davet Et`, `[Tıkla](https://discord.com/oauth2/authorize?client_id=794184837355274270&scope=bot&permissions=1074129984)`, true)
  .addField(`Bota Oy Ver`, `[Yakında..]()`, true)
  message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};