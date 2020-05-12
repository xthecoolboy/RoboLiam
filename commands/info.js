const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "info",
  description: "Displays bot info.",
  execute(message, args) {
    const packages = require("../package.json").dependencies;
    const version = require("../version.json").version;
    const bot = require("../index.js");

    let serverCount;
    bot.guilds.cache.tap((coll) => {
      serverCount = coll.size;
    });

    let userCount;
    bot.users.cache.tap((coll) => {
      userCount = coll.size;
    });

    let totalSeconds = bot.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    const Embed = new MessageEmbed()
      .setTitle("Bot Info")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/694637394300895273/84c7cbd530737d6f5a0b0edb660190a2.png"
      )
      .addField("Bot Version", version, true)
      .addField("Discord.js Version", packages["discord.js"], true)
      .addField("Servers", serverCount)
      .addField("Users", userCount, true)
      .addField(
        "Uptime",
        `${days} days, ${hours} hours, ${minutes} minutes, and ${Math.round(
          seconds
        )} seconds.`
      );

    message.channel.send(Embed);
  },
};
