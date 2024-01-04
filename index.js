/*
 Create by Kurama
 Github : https://github.com/Kurama250
*/

const fs = require('fs');
const { Client, Intents, MessageEmbed } = require('discord.js');
const config = JSON.parse(fs.readFileSync('config.json'));

const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

bot.once('ready', () => {
  console.log(`Started bot ${bot.user.tag}!`);
});

bot.on('messageDelete', async (deletedMessage) => {
  if (deletedMessage.partial) {
    try {
      await deletedMessage.fetch();
    } catch (error) {
      console.error('Error fetching deleted message:', error.message);
      return;
    }
  }

  const mentionedUser = deletedMessage.mentions.users.first();
  if (!mentionedUser || !deletedMessage.content) return;

  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Ghost message detected!')
    .setDescription(
      `${deletedMessage.author.username} has mentioned ${mentionedUser.username} :\n${deletedMessage.content}`
    );

  try {
    if (deletedMessage.channel.permissionsFor(bot.user).has('MANAGE_MESSAGES')) {
      const msg = await deletedMessage.channel.send({ embeds: [embed] });

      setTimeout(() => {
        msg.delete();
      }, config.deleteDelaySeconds * 1000);
    } else {
      console.error('Bot does not have permission to manage messages in the channel.');
    }
  } catch (error) {
    console.error('Error handling deleted message :', error.message);
  }
});

bot.login(config.token);
