from flask_marshmallow import Marshmallow

ma = Marshmallow()

def create_ma(app):
    try:
        ma.init_app(app)

        return ma
    except:
        print("Wrong")