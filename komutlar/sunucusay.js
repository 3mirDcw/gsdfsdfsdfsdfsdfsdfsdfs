const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const naber = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`Bot şu an ${client.guilds.size} sunucuya hizmet veriyor!`)
        .setFooter(`ShowTeam`)
        message.channel.send(naber);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["drm", "sunucusay"],
  permLevel: 0
};
exports.help = {
  name: "sunucusay",
  description: "Botun kaç sunucuda olduğunu gösterir.",
  usage: "sunucusay"
};