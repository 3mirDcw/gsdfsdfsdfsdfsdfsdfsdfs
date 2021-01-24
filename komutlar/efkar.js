const lucifeeer = require('discord.js');

exports.run = async(client, message) => {
    var Lucifer = message.mentions.users.first();
    if(!Lucifer) return message.channel.send(new lucifeeer.MessageEmbed().setDescription("Lütfen Birisini Etiketleyin.").setColor("RED"))

    var efkarLevel = ["%1","%2","%4","%5","%8","%9","%11","%15","%16","%19","%24","%25","%31"/*sj*/,"%42","%45","%46","%47","%49","%53","%54","%57","%58","%61","%68","%73","%75","%81","%84","%96","%100"]

    var efkarRandom = efkarLevel[Math.floor(Math.random() * efkarLevel.length)];

    message.channel.send(new lucifeeer.MessageEmbed().setDescription(`${efkarRandom} Efkarlısın. <a:B_Sigara:802635594358325269>`).setColor("BLACK"))


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["efkar-ölç", "efkar"],
    permLevel: 0
  };
  
  exports.help = {
    name: "efkar-ölç",
    description: "dasdas",
    usage: "!efkar"
  };