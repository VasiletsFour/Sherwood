from resourse.controller.Controller import Controller
from resourse.services.TournamentTableServices import TournamentTableServices


class TournamentTable(Controller):
    def __init__(self):
        super().__init__()
        self.service = TournamentTableServices()

    def get(self):
        service = self.service.get()

        return service.message, service.status
