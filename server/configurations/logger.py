import logging
import os
from logging.handlers import RotatingFileHandler

LOGGER_NAME = "GUSTAVO_PORTFOLIO_LOGGER"


def create_logger():
    if not os.path.exists("./logs"):
        os.makedirs("./logs")

    logger = logging.getLogger(LOGGER_NAME)
    logger.setLevel(logging.DEBUG)

    handler_local = RotatingFileHandler(
        f"./logs/{__name__}.log", mode="a", maxBytes=50000, backupCount=10
    )
    formatter = logging.Formatter(
        "[%(levelname)s] %(asctime)s %(funcName)s -> %(message)s"
    )

    handler_local.setFormatter(formatter)
    logger.addHandler(handler_local)

    return logger

