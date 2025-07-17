const { bot_token, admin_id } = require('./bot_config');
const bot = new TelegramBot(bot_token);

module.exports = function(bot) {
  bot.onText(/\/admin/, (msg) => {
    if (msg.from.id.toString() !== admin_id) return;
    
    bot.sendMessage(msg.chat.id, 'لوحة التحكم:', {
      reply_markup: {
        keyboard: [
          ['📊 الإحصائيات'],
          ['📢 إرسال إشعار']
        ],
        resize_keyboard: true
      }
    });
  });
};