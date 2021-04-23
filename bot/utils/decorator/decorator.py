import datetime


def request_printer(func):
    def wrapper(*args, **kwargs):
        func(*args, **kwargs)
        date = datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")

        print(
            "--({date}) msg:{text} [From:{user}]".format(text=args[0].text, user=args[0].from_user.username, date=date))

    return wrapper
