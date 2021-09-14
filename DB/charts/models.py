from application import db
import pandas as pd
import numpy as np
import csv
import sqlalchemy
from sqlalchemy import create_engine, MetaData, PrimaryKeyConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float
import datetime

# Use SQLAlchemy to model table schema
Base = declarative_base()

csvfiles = ["vac_age.csv", "locations.csv. vac_gender.csv, vac_race,py", MD_COV_Vac_County.csv"]
engine = create_engine("sqlite:///Vaccinations.sqlite")
conn = engine.connect()

class Ages(Base):
    __tablename__ = 'ages'
    age = Column(Float, primary_key=True) 
    first_dose = Column(Integer)
    second_dose = Column(Integer)
    single_dose = Column(Integer)
	 
class Locations(Base):
    __tablename__ = 'loc'

    county = Column(Text, primary_key=True)
    county_fips = Column(Integer)
    latitude = Column(Numeric)
    longitude = Column(Numeric)
    population = Column(Integer)
    first_dose = Column(Integer)
    per_first_dose = Column (Integer)
    second_dose = Column(Integer)
    per_second_dose = Column(Integer)
    single_dose = Column(Integer)
    per_single_dose = Column(Integer)
    fully_vaccinated = Column(Integer)
    per_fully_vaccinated = Column(Integer)

class Gender(Base):
    __tablename__ = 'gender'

    male = Column(Integer)
    female = Column(Integer)
    undefined = Column(Integer)
    

class Race(Base):
    __tablename__ = 'race'

    race = Column(Text, primary_key=True)
    first_dose = Column(Integer)
    second_dose = Column(Integer)
    single_dose = Column(Integer)

class counties(Base):
    __tablename__ = 'counties'

    date = Column(datetime)
    county = Column(Text)
    state = Column(Integer)
    seconfully_vaccinated = Column(Integer)
  
 def __str__(self):
    return self.county
    #return f"id={self.county, name={self.title}"

Base.metadata.create_all(engine)
metadata = MetaData(bind=engine)
metadata.reflect()

df = pd.read_csv(csvfiles[0], dtype=object)
ages_data = df.to_dict(orient='records')
###
df = pd.read_csv(csvfiles[1], dtype=object)
loc_data = df.to_dict(orient='records')

df = pd.read_csv(csvfiles[3], dtype=object)
gender_data = df.to_dict(orient='records')
###
df = pd.read_csv(csvfiles[4], dtype=object)
race_data = df.to_dict(orient='records')

###
df = pd.read_csv(csvfiles[5], dtype=object)
counties_data = df.to_dict(orient='records')
# Insert data into table using SQLAlchemy
###
ages_table = sqlalchemy.Table('ages', metadata, PrimaryKeyConstraint('age'),
                            autoload=True, extend_existing=True)
county_table = sqlalchemy.Table('county', metadata, PrimaryKeyConstraint('county'),
                            autoload=True, extend_existing=True)
loc_table = sqlalchemy.Table('loc', metadata), 
                            autoload=True, extend_existing=True)
gender_table = sqlalchemy.Table('gender', metadata),
                            autoload=True, extend_existing=True)
 
def __str__(self):
    return self.county
    #return f"id={self.county, name={self.title}"
    #                       


