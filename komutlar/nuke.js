const Discord = require('discord.js');

exports.run = async (client, message, args) => {
     if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You dont have permission.")
      if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("I dont have permission.")
      let channel = message.channel;

    message.channel.send("Lütfen Bekleyiniz")
   
  
    const cloned = await channel.fetch();
    const channelWebhooks = await channel.fetchWebhooks();
  
  
    await channel.delete();
    const created = await message.guild.channels.create(cloned.name,{
      type:cloned.type,
      parent:cloned.parent,
      nsfw:cloned.nsfw,
      topic:cloned.topic,
      rateLimitPerUser:cloned.rateLimitPerUser,
      permissionOverwrites:cloned.permissionOverwrites.array()
    })
    created.setPosition(cloned.rawPosition);
  for await (const [id, webhook] of channelWebhooks) {
  
  await created.createWebhook(webhook.name, {
  
  avatar:webhook.avatar,
  
  reason:"Nuked this channel." 
  
  })
  }
  message.guild.channels.cache.find(a => a.name === created.name).send("Nuked this channel.\nhttps://imgur.com/LIyGeCR")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};