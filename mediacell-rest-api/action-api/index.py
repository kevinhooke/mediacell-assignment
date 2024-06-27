from flask import Flask, jsonify, request
import json

# TODO: update this so we can initialize from a passed file name to support tests
with open('./actions.json') as json_data:
    actions = json.load(json_data)

def create_app():
    app = Flask(__name__)
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
        # TODO: codeword is a string from the path param but needs to be converted to an integer to match file
        return [action for action in actions['actions'] if(action['codeword'] == codeword)] 
    
    return app

if __name__ == '__main__':
    app.run(debug=True)