import requests
from flask import Flask
from flask_restful import Resource, Api
import base64

app = Flask(__name__)
api = Api(app)

class Api(Resource):
    def get(self, domain, user, password):
        url = "https://" + base64.b64decode(domain).decode("utf-8")  + ".zendesk.com/api/v2/tickets.json"
        user = base64.b64decode(user).decode("utf-8")
        pwd = base64.b64decode(password).decode("utf-8")
       
        response = requests.get(url, auth=(user, pwd))
        result = {"stat":"", "content":""}
        data = response.json()
        result["stat"] = response.status_code
        print(result["stat"])
        result["content"] = data
        return result

api.add_resource(Api, '/get_all_tickets/<string:domain>/<string:user>/<string:password>') 

if __name__ == '__main__':
    app.run(debug=True)