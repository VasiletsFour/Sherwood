from botMsg import answer
from config import Config
from decorator import request_printer
from telebot import TeleBot, types

bot = TeleBot(Config.bot_token)


class BotHandler(object):
    @staticmethod
    @bot.message_handler(commands=["start"])
    @request_printer
    def send_welcome(message):
        markup = types.ReplyKeyboardMarkup()
        item_news = types.KeyboardButton('Нвости')
        markup.row(item_news)

        bot.send_message(message.from_user.id, answer["start"], reply_markup=markup)

    # @bot.callback_query_handler(func=lambda call: True)
    # def callback_worker(call):
    #     print('ddd')
    #     if call.data == "yes":
    #         bot.send_message(call.message.chat.id, 'Запомню : )')
    #
    #     bot.send_message(call.message.chat.id, 'no')
