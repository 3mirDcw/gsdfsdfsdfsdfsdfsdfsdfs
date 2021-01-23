const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    let devtr=[
      "Aşkölçer %1 Gösteriyor.",
      "Aşkölçer %2 Gösteriyor.",
      "Aşkölçer %3 Gösteriyor.",
      "Aşkölçer %4 Gösteriyor.",
      "Aşkölçer %5 Gösteriyor.",
      "Aşkölçer %6 Gösteriyor.",
      "Aşkölçer %7 Gösteriyor.",
      "Aşkölçer %8 Gösteriyor.",
      "Aşkölçer %9 Gösteriyor.",
      "Aşkölçer %10 Gösteriyor.",
      "Aşkölçer %11 Gösteriyor.",
      "Aşkölçer %12 Gösteriyor.",
      "Aşkölçer %14 Gösteriyor.",
      "Aşkölçer %15 Gösteriyor.",
      "Aşkölçer %16 Gösteriyor.",
      "Aşkölçer %18 Gösteriyor.",
      "Aşkölçer %19 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %29 Gösteriyor.",
      "Aşkölçer %31 Gösteriyor. (Tehlike)",
      "Aşkölçer %32 Gösteriyor.",
      "Aşkölçer %34 Gösteriyor.",
      "Aşkölçer %35 Gösteriyor.",
      "Aşkölçer %36 Gösteriyor.",
      "Aşkölçer %37 Gösteriyor.",
      "Aşkölçer %38 Gösteriyor.",
      "Aşkölçer %39 Gösteriyor.",
      "Aşkölçer %40 Gösteriyor.",
      "Aşkölçer %41 Gösteriyor.",
      "Aşkölçer %42 Gösteriyor.",
      "Aşkölçer %43 Gösteriyor.",
      "Aşkölçer %55 Gösteriyor.",
      "Aşkölçer %57 Gösteriyor.",
      "Aşkölçer %59 Gösteriyor.",
      "Aşkölçer %60 Gösteriyor.",
      "Aşkölçer %62 Gösteriyor.",
      "Aşkölçer %63 Gösteriyor.",
      "Aşkölçer %64 Gösteriyor.",
      "Aşkölçer %65 Gösteriyor.",
      "Aşkölçer %66 Gösteriyor.",
      "Aşkölçer %69 Gösteriyor.",
      "Aşkölçer %70 Gösteriyor.",
      "Aşkölçer %74 Gösteriyor.",
      "Aşkölçer %75 Gösteriyor.",
      "Aşkölçer %76 Gösteriyor.",
      "Aşkölçer %77 Gösteriyor.",
      "Aşkölçer %79 Gösteriyor.",
      "Aşkölçer %80 Gösteriyor.",
      "Aşkölçer %81 Gösteriyor.",
      "Aşkölçer %82 Gösteriyor.",
      "Aşkölçer %83 Gösteriyor.",
      "Aşkölçer %0 Gösteriyor.",
      "Aşkölçer %95 Gösteriyor.",
      "Aşkölçer %99 Gösteriyor.",
      "Aşkölçer %100 Gösteriyor.",
    ]
let devtr_kod_paylasim = devtr[Math.floor(Math.random() * devtr.length)]
let xfalcon = msg.mentions.members.first()
     if (!xfalcon) return msg.channel.send('<a:by:752306236606906399> Kimi Sevdiğini Etiketle?') 
  msg.channel.send(`${msg.author}, ${xfalcon} İle Olan Aşkını ${devtr_kod_paylasim}.`)
    }



  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };

  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }