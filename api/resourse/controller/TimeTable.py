from resourse.controller.Controller import Controller
from resourse.services.TimeTableServices import TimeTableServices


class TimeTable(Controller):
    def __init__(self):
        super().__init__()
        self.service = TimeTableServices()

    def get(self):
        service = self.service.get()

        return service.message, service.status
