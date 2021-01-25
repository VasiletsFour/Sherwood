from common.responce.responce import Responce
from resourse.repositories.PlayerRepositories import PlayerRepositories
from resourse.services.Services import Services
from resourse.validator.PlayerValidate import create, update


class PlayerServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = PlayerRepositories()

    def get(self):
        return self.repository.get()

