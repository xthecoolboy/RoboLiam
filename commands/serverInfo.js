const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "serverInfo",
  description: "Displays server information.",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle(message.guild.name)
      .setThumbnail(message.guild.iconURL())
      .addField("Owner", message.guild.owner.user.tag, true)
      .addField("Region", message.guild.region, true);

    message.channel.send(Embed);
  },
};