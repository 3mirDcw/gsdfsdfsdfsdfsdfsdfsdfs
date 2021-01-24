const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.send("​
${prefix}kullanıcı      ::  Kullanıcı komutlarını gösterir.
${prefix}moderasyon     ::  1. Moderasyon komutlarını gösterir.
${prefix}moderasyon2    ::  2. Moderasyon komutları gösterir.
${prefix}gif-menü       ::  Gıf komutlarını gösterir.
​
# Komutlar hakkında yardım almak icin ${prefix}yardım `);",`= ShowTeam Yardım Menüsü =
​
${prefix}kullanıcı      ::  Kullanıcı komutlarını gösterir.
${prefix}moderasyon     ::  1. Moderasyon komutlarını gösterir.
${prefix}moderasyon2    ::  2. Moderasyon komutları gösterir.
${prefix}gif-menü       ::  Gıf komutlarını gösterir.
​
# Komutlar hakkında yardım almak icin ${prefix}yardım `);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send('asciidoc', `= ${command.help.name} =
​
Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};