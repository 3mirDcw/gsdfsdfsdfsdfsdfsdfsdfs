const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      " <a:red:802835418236059658> Bu komutu kullanabilmek için `Mesajları Yönet` yetkisine sahip olmanız gerek. <a:red:802835418236059658>"
    );
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    var embed = new Discord.RichEmbed()
      .setDescription(`Doğru kullanım: \`-yavaşmod [0/10]\``)
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send({ embed });
    return;
  }
  if (limit > 10) {
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription("<a:red:802835418236059658> Süre limiti maksimum **10** saniye olabilir.<a:red:802835418236059658> ")
        .setColor("RANDOM")
    );
  }
  message.channel.sendEmbed(
    new Discord.RichEmbed()
      .setDescription(`<a:kabul:802835416075862019> Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)
      .setColor("RANDOM")
  );
  var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "yavas-mod", "yavasmod", "yavaşmod"],
  permLevel: 1
};
 
exports.help = {
  name: "slowmode",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "slowmode [1/10]"
};