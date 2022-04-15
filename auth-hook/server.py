from flask import Flask
from flask import request, jsonify, abort
import data_manager

app = Flask(__name__)


def get_details_for_token(token):
    user_id = data_manager.get_user_id(token)
    roles = data_manager.get_rolename(token)
    variables = {
        'X-Hasura-Role': roles,
        'X-Hasura-User-Id': user_id
    }
    return variables


@app.route('/auth-webhook')
def auth_webhook():
    token = request.headers.get('Authorization')
    variables = get_details_for_token(token)

    if variables is not None:
        return jsonify(variables)
    else:
        return abort(401)
