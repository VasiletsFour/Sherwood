from datetime import datetime


class TimeStamp:
    @staticmethod
    def toTimeStamp():
        now = datetime.now()
        time_stamp = datetime.timestamp(now)

        return round(time_stamp)

    @staticmethod
    def fromTimeStamp(time_stamp: int):
        return datetime.fromtimestamp(time_stamp)

    @staticmethod
    def fromIsoToTimeStamp(date: str):
        return round(datetime.fromisoformat(date).timestamp())
