from telebot import TeleBot

from config import Config
from resorce.responce import ResponseBot
from utils.decorator.decorator import request_printer

bot = TeleBot(Config.bot_token)
responce = ResponseBot(bot)


class Bot(object):
    @staticmethod
    @bot.message_handler(commands=["start"])
    @request_printer
    def __send_welcome(message): return responce.send_welcome(message)

    @staticmethod
    @bot.message_handler(content_types=['text'])
    @request_printer
    def __get_text_messages(message): return responce.get_text(message)

    @staticmethod
    @bot.callback_query_handler(func=lambda call: True)
    def __callback_worker(call): return responce.callback_query(call)
