//coded by 3mir
const Discord = require ("discord.js");
 
exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Botumuz Maalesef Özel Mesajlarda Kullanılamaz**', `UYARI`)
    return message.author.send(ozelmesajuyari); }
const embed = new Discord.MessageEmbed  ()
.setColor("GOLD")
.setTitle('Show Team Yardım ')
.setImage('https://media.discordapp.net/attachments/803189389374652426/803191624435892244/standard.gif')
.setDescription(`
>    <a:9851_Loading:802635592928067584>  Show Team 1.9 Güncellemesi

> <a:carkl:682484412499099652> [ **!moderasyon** ] → Moderasyon Komutları
 ――――――――――――――――――――――――――――
> <a:kullanici:686200700820389909> [ **!kullanıcı** ] Kullanıcı Komutları
 ―――――――――――――――――――――――――――― 
> <a:707688648966930444:789460996938792970>  [ !**gif-menü** ] Gif Komutları
 ――――――――――――――――――――――――――――
> <a:onay:686199897367511040> [ **!koruma-yardım**] → Moderasyon Komutları
 ――――――――――――――――――――――――――――
> <a:gold:686208112252026981> [ **!seviye-yardım**] → Seviye Komutları
 ――――――――――――――――――――――――――――
> <:youtube:798553696426393600> [  **!abone-yardım**  ] Abone Komutları
 ――――――――――――――――――――――――――――
>     **<a:HaraketliEmoji198:802849819604680725> Bot Linkleri <a:HaraketliEmoji198:802849819604680725>**
――――――――――――――――――――――――――――
> <a:party:797015217963532289> Botu Davet Et [Tıkla!](bit.ly/showteamdavet)
 ――――――――――――――――――――――――――――
> <a:ayi:764799982154547222> Hatalar Var İse Destek Sunucusundan Bize Bildir Lütfen [Tıkla!](https://discord.gg/RybaFGs2)        
 ――――――――――――――――――――――――――――
 
 
`)
 
message.channel.send(embed);
 
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yardim","Yardım","Yardim"],
    permLevel: 0
};
 
  exports.help = {
    name: 'yardım'
};