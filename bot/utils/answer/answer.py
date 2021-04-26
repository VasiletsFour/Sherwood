from utils.formatToHTML.FomatToHtmlL import FormatToHtml

formatTo = FormatToHtml()

answer = {
    "/start": {
        "msg": "Welcome to sherwood bot"
    },
    'Новости': {
        "msg": "Blog",
        "route": "blogs",
        "html": formatTo.format_article
    },
    'Результаты': {
        "msg": "MatchResult",
        "route": "result",
        "html": formatTo.format_match_result
    },
    'Расписане': {
        "msg": "TimeTable",
        "route": "time_table",
        "html": formatTo.format_time_table
    },
    'Турнирная Таблица': {
        "msg": "Tournament",
        "route": "tournament_table",
        "html": formatTo.format_tournament
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
