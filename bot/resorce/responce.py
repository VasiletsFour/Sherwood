from telebot import types

from utils.answer.command import command
from utils.request.requests import handle_request


class ResponseBot(object):
    def __init__(self, bot):
        self.bot = bot
        self.markup = types.ReplyKeyboardMarkup()
        self.__answer = command
        self.res = handle_request
        self.league_text = "Выберите лигу:"

    def send_welcome(self, message):
        item_news = types.KeyboardButton('Новости')
        item_time_table = types.KeyboardButton('Расписане')
        item_match_result = types.KeyboardButton('Результаты')
        item_tournament = types.KeyboardButton('Турнирная Таблица')
        item_scorers = types.KeyboardButton('Бомбардиры')

        self.markup.row(item_news)
        self.markup.row(item_time_table, item_match_result)
        self.markup.row(item_tournament, item_scorers)

        self.bot.send_message(message.from_user.id, self.__answer[message.text]["msg"], reply_markup=self.markup)

    def get_text(self, message):
        switcher = self.__answer.get(message.text, "Команда не была распознана")

        if type(switcher) == str: return self.bot.send_message(message.from_user.id, switcher)
        if switcher["withLeague"]: return self.__get_res_with_btn(message.text, message.from_user.id)

        self.__get_res_without_btn(switcher, message.text, message.from_user.id)

    def callback_query(self, call):
        data = eval(call.data)
        switcher = self.__answer[data["msg"]]
        response = self.res(switcher["route"])

        self.bot.answer_callback_query(call.id)

        if response.get("error"):
            return self.bot.send_message(call.message.chat.id, response["error"])

        result = switcher["html"](response["data"]["data"], data["msg"])

        self.bot.send_message(call.message.chat.id, result, parse_mode='HTML')

    def __get_res_without_btn(self, switcher: dict, msg_text: str, msg_id: int):
        response = self.res(switcher["route"])
        result = response["error"] if response.get("error") else switcher["html"](response["data"]["data"], msg_text)

        self.bot.send_message(msg_id, result, parse_mode='HTML')

    def __get_res_with_btn(self, msg_text: str, msg_id: int):
        response = self.res("league")
        data = response["data"]["data"][0]['leagues']
        keyboard = types.InlineKeyboardMarkup()

        for league in data:
            callBack = str({"msg": msg_text, "id": league["id"]})
            key_first = types.InlineKeyboardButton(text=league["name"], callback_data=callBack)
            keyboard.add(key_first)

        self.bot.send_message(msg_id, self.league_text, reply_markup=keyboard)
