from resorce.bot import bot, BotHandler


class App(object):
    def __init__(self, msg):
        self.__bot_handler = BotHandler
        self.get_msg = lambda: print(msg)
        self.run = lambda: bot.polling(none_stop=True, interval=0, timeout=20)

        self.get_msg()


app = App(msg="Bot run")

if __name__ == '__main__':
    app.run()
