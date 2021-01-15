from datetime import datetime


class TimeStamp:
    @staticmethod
    def toTimeStamp():
        now = datetime.now()
        time_stamp = datetime.timestamp(now)

        return round(time_stamp)

    @staticmethod
    def fromTimeStamp(time_stamp: int):
        try:
            return datetime.fromtimestamp(time_stamp)
        except:
            print("Error")
