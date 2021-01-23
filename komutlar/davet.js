const westra = require('discord.js')
const westraclient = new westra.Client()
const westraembed = new westra.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Selam!\n **Lydia** Botu Ekleyerek Bize Destek Sağlayabilirsiniz.\nBotu Eklemek İçin [BURAYA](https://bit.ly/lydiadavet) Tıkla!`)
exports.run = async (westraclient, message, args) => {
	message.channel.send(westraembed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davetet"],
    permLevel: 0,
}
exports.help = {
    name: 'davet',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}