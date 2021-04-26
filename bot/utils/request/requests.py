import requests

from config import Config


def handle_request(route: str):
    try:
        response = requests.get(Config.api_url_local + "{}/".format(route))

        return {"status": response.status_code, "data": eval(response.text)}
    except requests.exceptions.ConnectionError:
        return {"status": 404, "error": "Сервер не отвечает, попробуйте позже"}
