class FormatToHtml(object):
    def __init__(self):
        self.newLine = "\n\n"
        self.tagB = '<b>'
        self.closeTagB = '</b>'
        self.__format_title = lambda title: self.tagB + title + ':' + self.closeTagB + self.newLine

    def format_article(self, data, title: str):
        result = ""

        for news in data:
            result += self.tagB + news["title"] + self.closeTagB + self.newLine + news["text"] + self.newLine

        return self.__format_title(title) + result

    def format_time_table(self, data, title: str):
        return self.__format_title(title)

    def format_tournament(self, data, title: str):
        return self.__format_title(title)

    def format_match_result(self, data, title: str):
        result = ""

        for match in data:
            result += self.tagB + match["host"]["name"] + "-" + match["guest"][
                "name"] + "   " + "(" + str(match["matchResult"]["goal_host"]) + "-" + str(
                match["matchResult"]["goal_guest"]) + ")" + self.closeTagB + self.newLine

        return self.__format_title(title) + result

    def format_scorers(self, data, title: str):
        return self.__format_title(title)
