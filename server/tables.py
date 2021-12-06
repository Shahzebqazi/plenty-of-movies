from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

SQLALCHEMY_DATABASE_URI = "sqlite:///test.db"

app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
db = SQLAlchemy(app)


class Test(db.Model):
    __tablename__='test'
    userid = db.Column('userid',db.Integer, primary_key=True)
    username = db.Column('username', db.String(30), unique=True, nullable=False)
    password = db.Column('password', db.Unicode(255), unique=True, nullable=False)



if __name__=='__main__':
    try:
        username='random3'
        password='nishu'
        user_check=Test.query.filter_by(username=username).first()
        if user_check==None:
            user1=Test(username=username,password=password)
            db.session.add(user1)
            db.session.commit()
            print('database addition successful.')
        else:
            print('username not unique')
    except Exception as e:
        print('unable to add user to database.')
        print(e)
