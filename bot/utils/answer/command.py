from utils.formatToHTML.FomatToHtmlL import FormatToHtml

formatTo = FormatToHtml()

command = {
    "/start": {
        "msg": "Welcome to sherwood bot"
    },
    'Новости': {
        "msg": "Blog",
        "route": "blogs",
        "withLeague": False,
        "html": formatTo.format_article
    },
    'Результаты': {
        "msg": "MatchResult",
        "route": "result",
        "withLeague": True,
        "html": formatTo.format_match_result
    },
    'Расписане': {
        "msg": "TimeTable",
        "route": "time_table",
        "withLeague": False,
        "html": formatTo.format_time_table
    },
    'Турнирная Таблица': {
        "msg": "Tournament",
        "route": "tournament_table",
        "withLeague": True,
        "html": formatTo.format_tournament
    },
    'Бомбардиры': {
        "msg": "Scorer",
        "route": "scorer",
        "withLeague": True,
        "html": formatTo.format_scorers
    }
}
