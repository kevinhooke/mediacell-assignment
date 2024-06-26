from flask import Flask, jsonify
import json

app = Flask(__name__)

with open('./actions.json') as json_data:
    actions = json.load(json_data)

@app.route('/actions', methods=['GET'])
def get_all_actions():
    """
    Returns all actions
    """
    return jsonify(actions)

if __name__ == '__main__':
    app.run(debug=True)