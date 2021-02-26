const Discord = require('discord.js')
exports.run = async (client, message, args, level) => {
    
    const gamerwolf = new Discord.MessageEmbed()
    .setTitle(`Komut Sayma Sistemi`)
    .setDescription('**Toplam**  **' + client.commands.size + '** ** Komut İle Size Hizmet Vermekteyim !!! **')
    .setImage('https://images-ext-1.discordapp.net/external/MpSTb7RAZzQ19-56JxXSTLW5W9tQJ5yVMbis85z92u0/https/images-ext-2.discordapp.net/external/-Abin_k3krUIUbc4OKDCL-_kiBhES0N9kkpHZHghaIs/https/media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')

    return message.channel.send(gamerwolf);
    
};

exports.conf = {
  enabled: true,
  aliases: ['komut-say','KomutSay','komutsay','Commands','Komut-Say'],
  guildOnly: true,
  permLevel: 0
};

exports.help = {
  name: 'commands',
  description: 'GamerWolf Komut Sayma Sistemi',
  usage: 'GamerWolf Komut Sayma Sistemi'
};