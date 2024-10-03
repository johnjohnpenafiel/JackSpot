#!/usr/bin/env python3

from app import app
from models import db, User, Collection, Spot

from faker import Faker
from random import randint, choice


fake = Faker()

type_list = ['Restaurant', 'Park', 'Venue', 'Club', 'Bar', 'Lounge']
collection_list = [1,2,3]
reviewOptions = [1,2,3,4,5]


def create_users():
    User.query.delete()
    
    user1 = User(username='john97', password='pass123', firstname='John', lastname='Penafiel')

    users = [user1]
    
    for i in range(10):
        user = User(
            username = fake.user_name(),
            password = "pass123",
            firstname = fake.first_name(),
            lastname =  fake.last_name()
        )
        users.append(user)
        
    db.session.add_all(users)
    db.session.commit()


def create_collections():
    Collection.query.delete()

    collections = []
    
    for i in range(20):
        collection = Collection(
            title = fake.state(),
            user_id = 1
        )
        collections.append(collection)
        
    db.session.add_all(collections)
    db.session.commit()

def create_spots():
    Spot.query.delete()

    spots = []

    for i in range(15):
        spot = Spot(
            type = choice(type_list),
            name = fake.company(),
            address = fake.address(),
            comment = fake.sentence(),
            review = choice(reviewOptions),
            image = 'https://static.vecteezy.com/system/resources/previews/000/552/683/non_2x/geo-location-pin-vector-icon.jpg',
            collection_id = choice(collection_list)
        )
        spots.append(spot)

    db.session.add_all(spots)
    db.session.commit()


def seed_database():
    create_users()
    create_collections()
    create_spots()

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        seed_database()