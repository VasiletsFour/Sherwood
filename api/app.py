from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from resourse.Season import Season
from db.connect.connect import connectDd
from common.marshmallow.marshmallow import create_ma
from flask_migrate import Migrate

app = Flask(__name__)

app.config.from_object('config.Config')
app.url_map.strict_slashes = False

api = Api(app)
create_ma(app)

CORS(app)
db = connectDd(app)
migrate = Migrate(app, db)

api.add_resource(Season, "/api/season/")

if __name__ == '__main__':
    app.run()