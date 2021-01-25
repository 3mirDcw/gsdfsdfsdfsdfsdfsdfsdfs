const Discord = require ("discord.js");
 
exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor()
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Botumuz Maalesef Özel Mesajlarda Kullanılamaz**', `UYARI`)
    return message.author.send(ozelmesajuyari); }
  /*
const EmbedCrewCode = new Discord.MessageEmbed()
 
.setColor("RANDOM")
.setTitle("**  » Greedy Yardım Menüsü   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
**» Bağlantılar**
** [Sponsor](https://play.google.com/store/apps/details?id=com.rigbak.adnam2demo)** **-**
**[Destek Sunucusu](https://discord.io/greedy)** **-** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=767480466957402173&scope=bot&permissions=268443710)** |  **!yenilikler** Yazmayı Unutmayın :)
**[En Iyi Bot List Için Tıkla!](https://discord.gg/DVnkCcAMm2)**
**Aktif Komutlar <:onaypit:794219157796945970>  **
**Bakımda olan Komutlar <:bostapit:793431817574547476>**
**__Daima Hizmetinizde__**
 
• <a:emoji_4:794319228554444850> Duyurular •
>  **__ Bot Yeni Altyapıya Güncellendi __**
 
**• Komutlar**
> <:onaypit:794219157796945970> [**!moderasyon**] → Moderasyon Komutları
> <:onaypit:794219157796945970> [**!kullanıcı**] → Kullanıcı Komutları
> <:onaypit:794219157796945970>  [**!moderasyon2**](https://discord.gg/4aN7bMNbdT) → Yetkili Komutları
**• Bilgilendirme**
> [**__Davet Et__**](https://discord.com/oauth2/authorize?client_id=767480466957402173&scope=bot&permissions=268443710)
> [**__Destek Sunucusu__**](https://discord.io/greedy)
 
**• Duyurular**
> Davet Sistemi __BETA__ Olarak Eklendi!
`)
.setImage("https://cdn.discordapp.com/attachments/793876414364647497/793879424331808778/standard.gif%22")
 
return message.channel.send(EmbedCrewCode)
.then;
*/
const embed = new Discord.MessageEmbed  ()
.setColor("Blue")
.setTitle('Show Team Yardım ')
.setImage('https://media.discordapp.net/attachments/803189389374652426/803191624435892244/standard.gif')
.setDescription(`
>    <a:9851_Loading:802635592928067584>  Show Team 1.4 Güncellemesi

> <a:carkl:682484412499099652> [ **!moderasyon** ] → Moderasyon Komutları
> <a:devp:776699041933295627> [ **!moderasyon2** ] → Yetkili Komutları 2
> <a:kullanici:686200700820389909>  [ **!kullanıcı** ] → Kullanıcı Komutları
> <a:707688648966930444:789460996938792970>  [ !**gif-menü** ] Gif Komutları
> <a:onay:686199897367511040> [ **!koruma-yardım**] → Moderasyon Komutları
> <a:gold:686208112252026981> [ **!seviye-yardım**] → Seviye Komutları  
>     **<a:HaraketliEmoji198:802849819604680725> Bot Linkleri <a:HaraketliEmoji198:802849819604680725>**
> <a:party:797015217963532289> Botu Davet Et [Tıkla!](https://discord.com/oauth2/authorize?client_id=794184837355274270&scope=bot&permissions=8)
> <a:ayi:764799982154547222> Hatalar Var İse Destek Sunucusundan Bize Bildir Lütfen [Tıkla!](https://discord.gg/7KFJktCdYf)        
 
 
 
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