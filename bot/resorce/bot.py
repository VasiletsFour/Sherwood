from telebot import TeleBot, types

from config import Config
from utils.answer.answer import answer
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
        item_match_result = types.KeyboardButton('Результаты')
        item_tournament = types.KeyboardButton('Турнирная Таблица')
        item_team = types.KeyboardButton('Команды')
        item_scorers = types.KeyboardButton('Бомбардиры')

        markup.row(item_news)
        markup.row(item_time_table, item_tournament, item_match_result)
        markup.row(item_team, item_scorers)

        bot.send_message(message.from_user.id, answer[message.text]["msg"], reply_markup=markup)

    @staticmethod
    @bot.message_handler(content_types=['text'])
    @request_printer
    def get_text_messages(message):
        switcher = answer.get(message.text, "Empty")

        if type(switcher) == str: return bot.send_message(message.from_user.id, switcher)

        response = handle_request(switcher["route"])
        result = response["error"] if response.get("error") else switcher["html"](response["data"]["data"],
                                                                                  message.text)

        bot.send_message(message.from_user.id, result, parse_mode='HTML')
