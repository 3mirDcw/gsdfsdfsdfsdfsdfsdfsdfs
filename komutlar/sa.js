 const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let tag = '王'
    const codare = new Discord.MessageEmbed()
        .setColor("#ffd100")
    .setTitle(`ShowTeam Sunucu Sayım`)
        .addField("Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("Çevrimiçi üye sayısı", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("Seslideki üye sayısı", count)
        .addField("Tagdaki üye sayısı", message.guild.members.filter(m => m.user.username.includes(tag)).size)
    message.channel.send(codare);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};
exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}; 