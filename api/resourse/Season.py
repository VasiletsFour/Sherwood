from flask_restful import Resource
from common.middleware.admin import login_admin
from db.models.Seasons import Seasons
from db.connect.connect import db
from resourse.SeasonSchema import seasons_schema
from sqlalchemy.orm import load_only
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, Sequence
from sqlalchemy import String, Integer, Float, Boolean, Column
from sqlalchemy.orm import sessionmaker

class Season(Resource):
    def get(self):
        all = db.session.query(Seasons).all()

        print(all)

        return "w"

    @login_admin
    def post(self):

        seasone = Seasons(name="WSS", date=312312)

        db.session.add(seasone)
        db.session.commit()

        return seasone
