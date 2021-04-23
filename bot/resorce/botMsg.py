from utils.formatToHTML.FomatToHtmlL import FormatToHtml

answer = {
    "/start": {
        "msg": "Welcome to sherwood bot"
    },
    'Новости': {
        "msg": "Blog",
        "route": "blogs",
        "html": FormatToHtml.format_article
    },
    'Расписане': {
        "msg": "TimeTable",
        "route": "time_table"
    },
    'Турнирная Таблица': {
        "msg": "Tournament",
        "route": "tournament_table"
    },
    'Команды': {
        "msg": "Team",
        "route": "team"
    },
    'Бомбардиры': {
        "msg": "Scorer",
        "route": "scorer"
    }
}
