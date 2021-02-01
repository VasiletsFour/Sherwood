from resourse.repositories.AccountRepositories import AccountRepositories
from resourse.services.Services import Services


class AccountServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AccountRepositories()

    def get(self):
        return self.repository.get()
