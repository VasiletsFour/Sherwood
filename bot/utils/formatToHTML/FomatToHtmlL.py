from utils.timeStamp.timeStamp import TimeStamp


class FormatToHtml(object):
    def __init__(self):
        self.newLine = "\n\n"
        self.tagB = '<b>'
        self.closeTagB = '</b>'
        self.__format_title = lambda title: self.tagB + title + ':' + self.closeTagB + self.newLine
        self.timeStamp = TimeStamp

    def format_article(self, data, title: str):
        result = ""

        if not data["count"]: return self.__empty_body(title, "Нет новых статей")

        for news in data["list"]:
            result += self.tagB + news["title"] + self.closeTagB + self.newLine + news["text"] + self.newLine

        return self.__format_title(title) + result

    def format_time_table(self, data, title: str):
        if not len(data): return self.__empty_body(title, "Нет новых матчей")

        result = self.tagB + str(data[0]["tour"]) + "Тур" + self.closeTagB + self.newLine

        for match in data:
            result += self.tagB + match["host"]["name"] + "-" + match["guest"][
                "name"] + "   " + "(" + self.closeTagB + self.newLine

        return self.__format_title(title)

    def format_tournament(self, data, title: str):
        if not len(data): return self.__empty_body(title, "Нет новых матчей")

        return self.__format_title(title)

    def format_match_result(self, data, title: str):
        result = ""

        if not len(data): return self.__empty_body(title, "Нет сыграных матчей")

        for match in data:
            result += self.tagB + match["host"]["name"] + "-" + match["guest"][
                "name"] + "   " + "(" + str(match["matchResult"]["goal_host"]) + "-" + str(
                match["matchResult"]["goal_guest"]) + ")" + self.closeTagB + self.newLine

        return self.__format_title(title) + result

    def format_scorers(self, data, title: str):
        return self.__format_title(title)

    def __empty_body(self, title, msg):
        return self.__format_title(title) + msg
