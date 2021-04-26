class FormatToHtml(object):
    def __init__(self):
        self.newLine = "\n\n"

    def format_article(self, data, title: str):
        result = ""

        for news in data:
            result += '<b>' + news["title"] + '</b>' + self.newLine + news["text"] + self.newLine

        return '<b>' + title + ':</b>' + self.newLine + result

    @staticmethod
    def format_time_table(data, title: str):
        print(data)
        result = '<b>' + data[0]["tour"] + ':</b>'

        for match in data:
            print(match)
            result += '<b>' + match["tour"] + ':</b>'

        return '<b>' + title + ':</b>'

    def format_tournament(self, data, title: str):
        return '<b>' + title + ':</b>'

    def format_match_result(self, data, title: str):
        return '<b>' + title + ':</b>'
