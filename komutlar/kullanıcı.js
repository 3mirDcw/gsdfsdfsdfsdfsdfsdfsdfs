const discord = require ("discord.js");

exports.run = (client, message) => {
/*if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  */
const he = new discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Show Team Bot  **")
//.setThumbnail("https://cdn.discordapp.com/attachments/802939948709445656/803584395868504074/standard_1.gif")
.setDescription(`
 **» <a:kullanici:686200700820389909> !avatar**  Avatarınızı Atar.
  **» <a:kullanici:686200700820389909> !sunucutanıt**  Sunucunuzu Tanıtır.
  **» <a:kullanici:686200700820389909> !kullanıcı-bilgi**  Etiketlediğiniz Kişinin Kullanıcı Bilgisini Gösterir.
  **» <a:kullanici:686200700820389909> !kanalbilgi **  Belirtilen Kanal Hakkında Bilgi Verir.
  **» <a:kullanici:686200700820389909> !davet**  Botu Davet Edersiniz!
  **» <a:kullanici:686200700820389909> !korona **  Korona Hakkında Bilgi Alırsınız.
  **» <a:kullanici:686200700820389909> !id **  Etiketlediğiniz Kişini İD sini atar.
  **» <a:kullanici:686200700820389909> !mcskin **  İsmini Girdiğiniz Skini Fotosunu Atar.
  **» <a:kullanici:686200700820389909> !emoji-bilgi**  İsmini Yazdığınız Emoji Hakkında Bilgi Alırsınız.
  **» <a:kullanici:686200700820389909> !saat **  Saati Gösterir.(Kendinde Bakabilirsin Ama)
  **» <a:kullanici:686200700820389909> !say**  Sunucuda ki Üye Durumlarını Gösterir.
  **» <a:kullanici:686200700820389909> !sunucu-bilgi** Sunucu Hakkın da Bilgi Verir.
  **» <a:kullanici:686200700820389909> !sunucu-resim**  Sunucunun İconunu Atar.
  **» <a:kullanici:686200700820389909> !yetkilerim**  Sunucuda ki Yetkilerinizi Gösterir.
  **» <a:kullanici:686200700820389909> !emoji-ekle** Yazdığınız Emojiyi Ekler.
  **» <a:kullanici:686200700820389909> !Davet**  Botun Davet Linkini Görebilirsin.
  **» <a:kullanici:686200700820389909> !sunucu-kur**  Sunucu Kurar (Kanalları Silmez)
  **» <a:kullanici:686200700820389909> !yaz**  Yazsığınız Mesajı Bot Yazar.
  **» <a:kullanici:686200700820389909> !stresçarkı**  Sizin İçin 1 Stres Çarkı Çevirir.
  **» <a:kullanici:686200700820389909> !kralol**  Kral Olursunuz.
                  ▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  !davet __Botu Davet Edebilirsiniz!__**
**»  !sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  !istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  !prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  !prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
 

message.channel.send(he);

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kullanıcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-kullanıcı'
};