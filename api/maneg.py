from flask_migrate import MigrateCommand
from flask_script import Manager

from app import create_app
from db.connect.connect import db

app = create_app()
db.create_all()
db.session.commit()
manager = Manager(create_app)
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    app.run()
