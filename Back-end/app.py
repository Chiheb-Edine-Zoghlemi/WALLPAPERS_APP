from flask import Flask
from flask_cors import CORS
import sqlite3
from flask import g, json, request

app = Flask(__name__)
CORS(app)
app.config['DATABASE'] = 'Wallpapers.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(app.config['DATABASE'])
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route("/wallpapers")
def get_wallpapers():
    cur = get_db().cursor()
    arg = request.args.get('arg')
    if not arg:
        arg = 0
    cur.execute("select * from Wallpapers  where ID > :arg limit 9 ", {'arg': arg})
    wallpapers = cur.fetchall()
    response = app.response_class(
        response=json.dumps(wallpapers),
        status=200,
        mimetype='application/json'
    )
    return response
@app.route("/wallpapers/download/<int:id>")
def set_download(id):
    cur = get_db().cursor()
    arg = request.args.get('arg')
    if not arg:
        arg = 0
    cur.execute("select * from Wallpapers  where ID > :arg limit 10 ", {'arg': arg})
    wallpapers = cur.fetchall()
    response = app.response_class(
        response=json.dumps(wallpapers),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route("/wallpapers/view/<int:id>")
def set_view(id):
    cur = get_db().cursor()
    arg = request.args.get('arg')
    if not arg:
        arg = 0
    cur.execute("select * from Wallpapers  where ID > :arg limit 10 ", {'arg': arg})
    wallpapers = cur.fetchall()
    response = app.response_class(
        response=json.dumps(wallpapers),
        status=200,
        mimetype='application/json'
    )
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
