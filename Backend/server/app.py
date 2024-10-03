#!/usr/bin/env python3

from flask import Flask, request, make_response, session, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from sqlalchemy import desc
import os

from models import db, User, Collection, Spot

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

CORS(app)

migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def index ():
    return "index for Jackspot API"


@app.route("/api/<int:user_id>/collections", methods=['GET', 'POST'])
def collections(user_id):

    collections = Collection.query.filter(user_id == user_id).order_by(desc(Collection.created_at)).all()

    if request.method == 'GET':
        return [c.to_dict(rules=["-user"]) for c in collections], 200

    elif request.method == 'POST':
        data = request.get_json()

        new_collection = Collection( 
            title=data.get('title'), 
            user_id=user_id
        )
        
        db.session.add(new_collection)
        db.session.commit()

        return new_collection.to_dict(), 201


@app.route("/api/collection/<int:collection_id>", methods=['GET', 'POST', 'DELETE'])
def collection_by_id(collection_id):
    collection = Collection.query.filter(Collection.id == collection_id).first()

    if request.method == 'GET':
        return collection.to_dict(), 200

    elif request.method == 'POST':
        data = request.get_json()

        new_spot = Spot( 
            name=data.get('name'), 
            type=data.get('type'),
            address=data.get('address'),
            comment=data.get('comment'),
            review=data.get('review'),
            image=data.get('image'),
            collection_id=collection_id
        )
        
        db.session.add(new_spot)
        db.session.commit()

        return new_spot.to_dict(), 201
    
    elif request.method == 'DELETE':
        db.session.delete(collection)
        db.session.commit()

        response_body = {
            "delete_succesful" : True,
            "message" : "spot deleted"
        }

        return response_body, 200



@app.route('/api/<int:collection_id>/spots', methods=['GET'])
def all_items_by_collection_id(collection_id):
    
    spots = Spot.query.filter(Spot.collection_id == collection_id).all()
    
    if request.method == 'GET':
        return [s.to_dict(rules=["-collection.user"]) for s in spots], 200


@app.route('/api/collection/spot/<int:spot_id>', methods=['GET', 'DELETE', 'PATCH'])
def get_spot_by_id(spot_id):
    
    spot = Spot.query.filter(Spot.id == spot_id).first()

    if request.method == 'GET':
        return spot.to_dict(rules=['-collection.user']), 200

    elif request.method == 'DELETE':
        db.session.delete(spot)
        db.session.commit()

        response_body = {
            "delete_succesful" : True,
            "message" : "spot deleted"
        }

        return response_body, 200

    # elif request.method == 'PATCH':
    #     data = request.get_json()
        
    #     for attr, value in data.items():
    #         setattr(spot, attr, value)
        
    #     db.session.add(spot)
    #     db.session.commit()
    #     return spot.to_dict(), 200



if __name__ == "__main__":
    app.run(port=5555, debug=True)