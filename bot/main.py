from resorce.bot import bot, BotHandler


class App(object):
    def __init__(self, msg="<<Bot Running>>"):
        self.__bot_handler = BotHandler
        self.get_msg = lambda: print(msg)
        self.run = lambda: bot.polling(none_stop=True, interval=0, timeout=20)

        self.get_msg()


app = App()

if __name__ == '__main__':
    app.run()
