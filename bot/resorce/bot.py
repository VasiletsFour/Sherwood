from telebot import TeleBot, types

from config import Config
from resorce.botMsg import answer
from utils.decorator.decorator import request_printer
from utils.request.requests import handle_request

bot = TeleBot(Config.bot_token)


class BotHandler(object):
    @staticmethod
    @bot.message_handler(commands=["start"])
    @request_printer
    def send_welcome(message):
        markup = types.ReplyKeyboardMarkup()
        item_news = types.KeyboardButton('Новости')
        item_time_table = types.KeyboardButton('Расписане')
        item_tournament = types.KeyboardButton('Турнирная Таблица')
        item_team = types.KeyboardButton('Команды')
        item_scorers = types.KeyboardButton('Бомбардиры')

        markup.row(item_news)
        markup.row(item_time_table, item_tournament)
        markup.row(item_team, item_scorers)

        bot.send_message(message.from_user.id, answer["/start"], reply_markup=markup)

    @staticmethod
    @bot.message_handler(content_types=['text'])
    @request_printer
    def get_text_messages(message):
        switcher = answer.get(message.text, "Empty")

        if type(switcher) == str: return bot.send_message(message.from_user.id, switcher)

        response = handle_request(switcher["route"])
        result = switcher["html"](response["data"], message.text)

        bot.send_message(message.from_user.id, result, parse_mode='HTML')

# Query message is text
# @bot.callback_query_handler(func=lambda call: True)
# def callback_worker(call):
#     print('ddd')
#     if call.data == "yes":
#         bot.send_message(call.message.chat.id, 'Запомню : )')
#
#     bot.send_message(call.message.chat.id, 'no')
