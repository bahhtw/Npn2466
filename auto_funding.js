module.exports = function(bot) {
  bot.onText(/تمويل قناة/, (msg) => {
    bot.sendMessage(msg.chat.id, 'اختر الباقة:', {
      reply_markup: {
        inline_keyboard: [
          [{text: "100 عضو (2$)", callback_data: "fund_100"}],
          [{text: "500 عضو (8$)", callback_data: "fund_500"}]
        ]
      }
    });
  });
};