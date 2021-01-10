from datetime import datetime


class TimeStamp:
    def toTimeStamp(self):
        now = datetime.now()
        time_stamp = datetime.timestamp(now)

        return round(time_stamp)

    def fromTimeStamp(self, timeStamp):
        try:
            return datetime.fromtimestamp(timeStamp)
        except:
            print("Error")