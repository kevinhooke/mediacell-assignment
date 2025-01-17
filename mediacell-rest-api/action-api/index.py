from flask import Flask, jsonify, request
from flask_cors import CORS
import json

# TODO: update this so we can initialize from a passed file name to support tests
with open('./actions.json') as json_data:
    actions = json.load(json_data)

def create_app():
    app = Flask(__name__)
    cors = CORS(app)
    return app

app = create_app()

@app.route('/actions', methods=['GET'])
def get_all_actions():
    """ Returns all actions
    """
    return jsonify(actions)

@app.route('/actions/codeword/<codeword>', methods=['GET'])
def get_action_by_codeword(codeword):
    """ Returns actions by matching codeword id
    """
    if codeword == request.view_args['codeword']:
        if codeword != "":
            codeword = int(codeword)
            result = [action for action in actions['actions'] if(action['codeword'] == codeword)]

            if not result:
                result = app.response_class(
                    response=json.dumps({ "status" : 404, "message" : "Not found"}),
                    status=404,
                    mimetype='application/json')
        else:
            result = app.response_class(
                    response=json.dumps({ "status" : 404, "message" : "Expected parameter missing"}),
                    status=404,
                    mimetype='application/json')
        return result

@app.route('/actions/action/<actionid>', methods=['GET'])
def get_action_by_actionid(actionid):
    """ Returns actions by matching action id
    """
    if actionid == request.view_args['actionid']:
        if actionid != "":
            result = [action for action in actions['actions'] if(action['id'] == actionid)]

            if not result:
                result = app.response_class(
                    response=json.dumps({ "status" : 404, "message" : "Not found"}),
                    status=404,
                    mimetype='application/json')
        else:
            result = app.response_class(
                    response=json.dumps({ "status" : 404, "message" : "Expected parameter missing"}),
                    status=404,
                    mimetype='application/json')
        return result

if __name__ == '__main__':
    app.run(debug=True)