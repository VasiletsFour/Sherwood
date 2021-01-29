import smtplib, ssl
from config import Config
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


class SendEmail:
    def __init__(self, receiver_email, token):
        self.port = Config.PORT_SMTP
        self.message = MIMEMultipart("alternative")
        self.message["Subject"] = "Confirm Email"
        self.sender_email = Config.EMAIL_SMTP
        self.password = Config.PASS_SMTP
        self.receiver_email = receiver_email
        self.message["From"] = self.sender_email
        self.message["To"] = receiver_email
        html = """\<html><body><h1>Добро пожаловать</h1><p>Для подтверждения почты перейдите по ссылке</p><a href="{url}">{url}</a></body></html>""".format(
            url=Config.CLIENT + "/confirm_account/" + "token")
        part2 = MIMEText(html, "html")
        self.message.attach(part2)
        self.context = ssl.create_default_context()

        self.send_email()

    def send_email(self):
        with smtplib.SMTP_SSL("smtp.gmail.com", self.port, context=self.context) as server:
            server.login(self.sender_email, self.password)
            server.sendmail(
                self.sender_email, self.receiver_email, self.message.as_string()
            )
