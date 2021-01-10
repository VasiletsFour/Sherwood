from app import create_app
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = create_app()
db = SQLAlchemy(app)
db.create_all()

CORS(app)

if __name__ == '__main__':
    app.run()
