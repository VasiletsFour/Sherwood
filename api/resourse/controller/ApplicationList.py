from flask import send_file, make_response

from resourse.controller.Controller import Controller
from resourse.services.ApplicationListServices import ApplicationListServices


class ApplicationList(Controller):
    def __init__(self):
        super().__init__()
        self.service = ApplicationListServices()

    def get(self):
        print("w")
        service = self.service.get(search=self.search, beforeDate=self.beforeDate, fromDate=self.fromDate)
        response = make_response(service["message"]['data'])
        response.headers.set('Content-Type', 'application/msword')
        response.headers.set(
            'Content-Disposition', 'attachment', filename='test.docx')
        return response
