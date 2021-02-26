const Discord = require('discord.js');
const shorten = require('isgd');

exports.run = (client, message, args, tools) => {
    message.delete();
    if (!args[0]) return message.channel.send(' ** \n » Kullanım: !kısalt <URL> <isim> \n » Örnek: !kısalt www.youtube.com/c/UC7KqoB3_BYjB1w1hFz098xw Pythonic ** ')

    if(!args[1]) {

        shorten.shorten(args[0], function(ryzeabin) {
            if (ryzeabin.startsWith('Hata:')) message.channel.send('**Lütfen doğru URL adresi giriniz.**');

            message.channel.send(`**<${ryzeabin}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(ryzeabiniz) {

            if (ryzeabiniz.startsWith('Hata:')) message.channel.send(`**<${ryzeabiniz}>**`);

            message.channel.send(`**<${ryzeabiniz}>**`);
        })
    }

};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'kısalt',
 description: 'İstediğiniz URLni Kısaltır. ',
 usage: 'kısalt'
};