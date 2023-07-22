// Cerate by Kurama
// Github : https://github.com/Kurama250

const fs = require('fs');
const { Client, MessageEmbed } = require('discord.js');
const config = JSON.parse(fs.readFileSync('config.json'));
const bot = new Client();
bot.once('ready', () => {
  console.log('Started bot ${client.user.tag} !');
});

bot.on('messageDelete', async (deletedMessage) => {
  const mentionedUser = deletedMessage.mentions.users.first();
  if (!mentionedUser) return;

  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Ghost message detected !')
    .setDescription(
      `${deletedMessage.author.username} has mentioned ${mentionedUser.username} :\n${deletedMessage.content}`
    );

  const msg = await deletedMessage.channel.send(embed);
  setTimeout(() => {
    msg.delete();
  }, config.deleteDelaySeconds * 1000);
});

bot.login(config.token);
