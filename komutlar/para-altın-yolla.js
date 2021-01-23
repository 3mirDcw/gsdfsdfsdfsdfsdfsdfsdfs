const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let x = /(-)/

  let user = message.mentions.users.first();

  if (!user) return message.reply('<a:reddededee:763326997266038794> Kime altın yollayacağını etiketlemen lazım!');
  if (user.bot === true) return message.reply('<a:reddededee:763326997266038794> Altını bir bota yollarsan sen zararlı çıkarsın!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('<a:reddededee:763326997266038794> Yollayacağın miktarı yazman gerek!');

  if (user.id === message.author.id) return message.reply(`${client.emojis.cache.get(client.emojiler.kendineParaYollama)} Kendine altınmı yollayacaksın ciddimisin?`);

  if (mesaj.match(x)) return message.reply('<a:reddededee:763326997266038794> Tek zeki sensin zaten!');
if (isNaN(args[1])) return message.channel.send("<a:reddededee:763326997266038794> Lütfen bir sayı gir.")

    
    

  let altın = await db.fetch(`altıncıklar_${message.author.id}`);
  let elmas = await db.fetch(`altıncıklar_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

 

  if (altın < mesaj) {
    let bulunanP = await db.fetch(`altıncıklar_${message.author.id}`)
    message.channel.send(`<a:dorudoru:763326993135566848> Yeterince altının bulunmuyor, sende olan altın:  ${bulunanP === null  ? "0" : `${bulunanP}`}`)
} else if  (altın > mesaj) {

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`<a:dorudoru:763326993135566848> ${user} Adlı kullanıcıya altın yollandı, yollanılan miktar: ${mesaj}`)
  message.channel.send(embed)
  db.add(`altıncıklar_${user.id}`, mesaj)
  db.add(`altıncıklar_${message.author.id}`, -mesaj)
  

}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['altın-ver', 'altınyolla'],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'altın-yolla',
  description: 'İstediğiniz kişiye altın yollayabilirsiniz.',
  usage: 'altın-yolla <@üye> <miktar>'
};