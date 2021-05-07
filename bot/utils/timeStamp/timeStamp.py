from datetime import datetime


class TimeStamp:
    @staticmethod
    def timeStampToDate(time_stamp: int):
        return datetime.fromtimestamp(time_stamp).strftime("%m/%d/%y")

    @staticmethod
    def timeStampToTime(time_stamp: int):
        return datetime.fromtimestamp(time_stamp).strftime("%H:%M")
