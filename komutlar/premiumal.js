const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 

  if(message.author.id !== '488384549479251969') if(message.author.id !== '504704539585150986')
    
      return;

 const args0 = args[0];
  if(!args0) {
    message.channel.send("<a:redke:763316512937082890> Sunucu **ID** yazmalısın!")
  } else {
  
 
db.delete(`premod_${args0}`,"deaktif")
message.channel.send("<a:onayke:763316512051691520> Başarıyla premium alındı.")
 
}
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-al'],
    permLevel: 0,
      
}

exports.help = {
    name: 'premiumal',
    description: 'premiumal',
    usage: 'premiumal',

}