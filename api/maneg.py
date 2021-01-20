from flask_cors import CORS
from flask_migrate import MigrateCommand
from flask_script import Manager
from app import create_app

app = create_app()
cors = CORS(app)

manager = Manager(create_app)
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    app.run()
