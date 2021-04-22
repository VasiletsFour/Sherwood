import os
from dotenv import load_dotenv

load_dotenv()


class Config(object):
    bot_token = os.environ.get("TELE_BOT_TOKEN")
