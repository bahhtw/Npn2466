const { bot_token } = require('./bot_config');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(bot_token, {polling: true});

// الأوامر الأساسية
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'مرحباً بك في البوت!', {
    reply_markup: {
      keyboard: [
        ['🎁 الهدية اليومية'],
        ['📢 القناة الرسمية']
      ],
      resize_keyboard: true
    }
  });
});

// نظام النقاط
let userPoints = {};
bot.onText(/🎁 الهدية اليومية/, (msg) => {
  const userId = msg.from.id;
  userPoints[userId] = (userPoints[userId] || 0) + 1000;
  bot.sendMessage(msg.chat.id, `🎉 حصلت على 1000 نقطة! رصيدك: ${userPoints[userId]}`);
});