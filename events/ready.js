const chalk = require('chalk');
const moment = require('moment');
require("moment-duration-format");
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
        var tarih = ''
      if(moment().format('MM') === '01') {
                var tarih = `${moment().format('DD')} Ocak ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '02') {
                var tarih = `${moment().format('DD')} Şubat ${moment().format('YYYY')} `
            }
      if(moment().format('MM') === '03') {
                var tarih = `${moment().format('DD')} Mart ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '04') {
                var tarih = `${moment().format('DD')} Nisan ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '05') {
                var tarih = `${moment().format('DD')} Mayıs ${moment().format('YYYY')} `
            }
      if(moment().format('MM') === '06') {
                var tarih = `${moment().format('DD')} Haziran ${moment().format('YYYY')} `
            }
      if(moment().format('MM') === '07') {
                var tarih = `${moment().format('DD')} Temmuz ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '08') {
                var tarih = `${moment().format('DD')} Ağustos ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '09') {
                var tarih = `${moment().format('DD')} Eylül ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '10') {
                var tarih = `${moment().format('DD')} Ekim ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '11') {
                var tarih = `${moment().format('DD')} Kasım ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '12') {
                var tarih = `${moment().format('DD')} Aralık ${moment().format('YYYY')} `
            }
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  client.user.setActivity(`🚀 !yardım Bot şu an ${client.guilds.cache.size} sunucuya ve 62.058 Kullanıcıya Hizmet Veriyor ;)`, { type: "LISTENING"});
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};