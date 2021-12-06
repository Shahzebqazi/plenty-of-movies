# A very simple Flask Hello World app for you to get started with...

from flask import Flask, jsonify, request, session, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import jwt
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps
from generate_movies import movie_list, generate_movie
import requests
import time
app = Flask(__name__)

app.config['DEBUG']=True
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///pom.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY']='cps731'
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
db = SQLAlchemy(app)

class Users(db.Model):
    __tablename__='users'
    id = db.Column('id',db.Integer, primary_key=True)
    email = db.Column('email', db.String(50), unique=True, nullable=False)
    password = db.Column('password', db.String(100), nullable=False)

def token_required(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        try:
            token=request.json['token']
        except:
            return jsonify(success=False,message="Token is missing!")
        try:
            data=jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify(success=False,message="Token is invalid!")
        return f(*args,**kwargs)
    return decorated

@app.route('/time')
def get_current_time():
    return {'time':time.time()}

@app.route('/')
def home():
    return "Hello this is pom headquarters."

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method=='GET':
        return 'hello this is login page. Make a post request to valid the user and generate token.'
    if request.method=='POST':
        data=request.json
        email_check = data['email']
        password_check = data['password']
        userin=Users.query.filter_by(email=email_check).first()
        if userin and check_password_hash(userin.password, password_check):
            token=jwt.encode({'user': email_check, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
            session['username']=email_check
            return jsonify(success=True, message="Welcome to plenty of movies {user}".format(user=email_check), token=token.decode('UTF-8'))
        else:
            return jsonify(success=False, message="Invalid credentials! Or Create a new account if you do not have one.")


@app.route('/signup',methods=['GET','POST'])
def signup():
    if request.method=='GET':
        return "this is the signup route make a post request to get signup a user"
    elif request.method=='POST':
        data=request.json
        message=''
        success=True
        email=data['email']
        password=data['password']
        userin=Users.query.filter_by(email=email).first()
        if userin:
            success=False
            message='Email already in use.'
        else:
            hashed_password = generate_password_hash(password, method='sha256')
            new_user=Users(email=email,password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
            message='Signed up successfully'
        return jsonify(
                Success=success,
                Message=message
            )
    return 'something went wrong.'


@app.route('/generate',methods=['GET','POST'])
#@token_required
def generate():
    if request.method=='GET':
        return "This is the generate page"
    elif request.method=='POST':
        data=request.json
        print(data)
        genre_list=[]
        try:
            if data['Action'] == True:
                genre_list.append("Action")
            if data['Comedy'] == True:
                genre_list.append("Comedy")
            if data['SciFi'] == True:
                genre_list.append("Sci-Fi")
            if data['Romance'] == True:
                genre_list.append("Romance")
            if data['History'] == True:
                genre_list.append("History")
            if data['Musical'] == True:
                genre_list.append("Musical")
            if data['Animation'] == True:
                genre_list.append("Animation")
            if data['Horror'] == True:
                genre_list.append("Horror")
        except:
            return jsonify(success=False, message="Missing fields make sure all genres are included")
        session['movie_list']=movie_list(genre_list)
        movie=session['movie_list'].pop(0)
        session['movie_list']=session['movie_list'][1:]
        movie_data=generate_movie(movie)
        return jsonify(success=True, title=movie_data['Title'],year=movie_data['Year'],poster=movie_data['Poster'])
    else:
        return jsonify(success=False, message="Invalid request only get requests count")


@app.route('/getmovie',methods=['GET'])
#@token_required
def getmovie():
    if request.method=='GET':
        movie=session['movie_list'].pop(0)
        session['movie_list']=session['movie_list'][1:]
        movie_data=generate_movie(movie)
        return jsonify(success=True, title=movie_data['Title'],year=movie_data['Year'],poster=movie_data['Poster'])
    else:
        return jsonify(success=False, message="Invalid request only get requests count")
        
if __name__ == '__main__':
    app.run(debug=True)
