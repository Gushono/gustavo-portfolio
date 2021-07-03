import connexion
from server.services.formations_service import FormationService


def get_formations() -> bool:
    """
    GET -> /formations

    :param: page: Number of the page to show the paginated list of formations

    :return: PaginatedFormations
    """

    formation_service = FormationService()
    return formation_service.get_formations()
