from server import logger


class FormationService:

    def __init__(self) -> None:
        super().__init__()

    def get_formations(self):
        logger.info("Teste logerr")
        print(self.__class__.__name__)
        return True
