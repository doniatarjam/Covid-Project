from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(_name_)

#Add DataBase
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/Vaccinations_DB'
app.config['SECRET_KEY'] = 'mysecretkey'

db= SQLAlchemy (app)

from application import routes
