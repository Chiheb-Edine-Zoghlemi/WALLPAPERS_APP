from functools import wraps
from flask import Flask, render_template, jsonify
from flask_cors import CORS
import sqlite3
from flask import g, json, request

app = Flask(__name__)
CORS(app)
app.config['DATABASE'] = 'Wallpapers.db'
app.config['Secret_Key'] = 'hedha el code taa el backend'


@app.route('/')
def my_index():
    return render_template("index.html", Mat9oul_l7ad=app.config['Secret_Key'])
@app.errorhandler(404)
def page_not_found(e):
    # your processing here
    return render_template("index.html", Mat9oul_l7ad=app.config['Secret_Key'])

def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None
        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']
        if not token:
            return jsonify({'message': 'a valid token is missing'})
        if token == app.config['Secret_Key']:
            return f(*args, **kwargs)
        else:
            return jsonify({'message': 'token is invalid'})

    return decorator


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


@app.route("/wallpapers", methods=['GET'])
@token_required
def get_wallpapers():
    cur = get_db().cursor()
    arg = request.args.get('arg')
    if not arg:
        arg = 10
    cur.execute("select * from Wallpapers  where ID < :arg  ", {'arg': arg})
    wallpapers = cur.fetchall()
    response = app.response_class(
        response=json.dumps(wallpapers),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route("/wallpapers/download/<int:id_wallpaper>", methods=['GET'])
@token_required
def set_download(id_wallpaper):
    con = get_db()
    cur = con.cursor()
    cur.execute("update Wallpapers set DOWLOADS = DOWLOADS + 1 where ID = :arg  ", {'arg': id_wallpaper})
    con.commit()
    cur.execute("select * from Wallpapers  where ID = :arg  ", {'arg': id_wallpaper})
    wallpaper = cur.fetchone()
    response = app.response_class(
        response=json.dumps(wallpaper),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route("/wallpapers/view/<int:id_wallpaper>", methods=['GET'])
@token_required
def set_view(id_wallpaper):
    con = get_db()
    cur = con.cursor()
    cur.execute("update Wallpapers set VIEWS = VIEWS + 1 where ID = :arg  ", {'arg': id_wallpaper})
    con.commit()
    cur.execute("select * from Wallpapers  where ID = :arg  ", {'arg': id_wallpaper})
    wallpaper = cur.fetchone()
    response = app.response_class(
        response=json.dumps(wallpaper),
        status=200,
        mimetype='application/json'
    )
    return response


if __name__ == '__main__':
    app.run()
