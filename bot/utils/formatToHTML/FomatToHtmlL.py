class FormatToHtml(object):
    @staticmethod
    def format_article(data, title: str):
        res = eval(data)
        newsList = res["data"]
        result = ""

        for news in newsList:
            print(news["title"])
            result += '<b>' + news["title"] + '</b>\n\n' + news["text"] + "\n\n"

        return '<b>' + title + ':</b>\n\n' + result
