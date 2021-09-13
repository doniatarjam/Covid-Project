# 1. Import Flask
import json
import os
import sqlalchemy
from flask import Flask, render_template, send_from_directory, jsonify
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, Column, Integer, String
from sqlalchemy.sql.expression import false, null


#Database Setup
engine = create_engine("postgresql://postgres:Passw0rd@localhost:5432/Covid")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Passenger = Base.classes.vac_by_age

Base = declarative_base()

# 2. Create an app
app = Flask(__name__, template_folder='templates', static_url_path='')

@app.route("/names")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all passengers
    results = session.query(Passenger).all()

    session.close()

    return jsonify(posts=list(results))

@app.route('/')
def home():
   return 'Hello, use display-geo'

@app.route('/display-geo', methods=['GET'])
def get_geo_json_display():
   return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static', 'js'), filename)

if __name__ == '__main__':
   app.run()