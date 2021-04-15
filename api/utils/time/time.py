import datetime


class ConvertTime:
    @staticmethod
    def year():
        time = datetime.datetime.now()

        return str(time.year)
