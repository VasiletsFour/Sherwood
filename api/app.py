import logging

from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_migrate import MigrateCommand
from flask_script import Manager

from View import View
from db.connect.connect import DBConnect
from utils.bcrypt.bcrypt import bcrypt

migrate = Migrate()


class CreateApp:
    def __init__(self):
        self.app = Flask(__name__)
        self.cors = CORS(self.app)
        self.manager = Manager(self.app)

    def create(self):
        self.manager.add_command('db', MigrateCommand)

        logging.basicConfig(filename="log.log", level="INFO")

        CORS(self.app, supports_credentials=True)
        self.app.config.from_object('config.Config')
        self.app.url_map.strict_slashes = False

        db = DBConnect().connectDd(self.app)

        Migrate(self.app, db)
        migrate.init_app(self.app, db, render_as_batch=True)
        bcrypt.init_app(self.app)

        View(self.app).get_view()

        with self.app.app_context():
            if db.engine.url.drivername == 'sqlite':
                migrate.init_app(self.app, db, render_as_batch=True)
            else:
                migrate.init_app(self.app, db)

        return self.app


app = CreateApp().create()

if __name__ == '__main__':
    app.run()
