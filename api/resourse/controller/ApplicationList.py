import io

from flask import send_file

from resourse.controller.Controller import Controller
from resourse.services.ApplicationListServices import ApplicationListServices


class ApplicationList(Controller):
    def __init__(self):
        super().__init__()
        self.service = ApplicationListServices()

    def get(self):
        service = self.service.get(search=self.search, beforeDate=self.beforeDate, fromDate=self.fromDate)

        return send_file(io.BytesIO(service.message['data']), mimetype="text/xmlx", as_attachment=True,
                         attachment_filename='test.xmlx')
