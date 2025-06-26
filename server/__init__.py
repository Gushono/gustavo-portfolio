import connexion
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

from server.configurations.enviroment_variables import GUSTAVO_DB_CONN
from server.configurations.logger import create_logger

db = SQLAlchemy()
ma = Marshmallow()
logger = create_logger()


def initiate_server():
    app = connexion.App(__name__, specification_dir="./swagger/")
    app.add_api("swagger.yaml")

    app.app.config["SQLALCHEMY_DATABASE_URI"] = GUSTAVO_DB_CONN
    app.app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {'pool_pre_ping': True}
    db.init_app(app.app)
    CORS(app.app)
    ma.init_app(app.app)

    return app
