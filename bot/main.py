from config import Config
from resorce.bot import bot


class App(object):
    def __init__(self, msg="<<Bot Running>>"):
        self.get_msg = lambda: print(msg)

    def run(self):
        try:
            assert Config.bot_token or Config.api_url_local

            self.get_msg()
            bot.polling(none_stop=True, interval=0, timeout=20)
        except AssertionError:
            print("Token or api url not found")
            exit()


if __name__ == '__main__':
    App().run()
