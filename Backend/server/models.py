from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, ForeignKey
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

db = SQLAlchemy(metadata=MetaData(naming_convention=convention))



class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    firstname = db.Column(db.String, nullable=False)
    lastname = db.Column(db.String, nullable=False)
    

    def __repr__(self):
        return f'<User User: {self.username}, Name: {self.firstname} {self.lastname}>'

    # add validation

    # add relationship 
    
    # add serialization rules


class Collection(db.Model, SerializerMixin):
    __tablename__ = 'collections'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    user_id = db.Column(db.Integer, ForeignKey('users.id'))

    # add validation

    # add relationship 
    spots = db.relationship('Spot', back_populates='collection', cascade='all, delete-orphan')
    user = db.relationship('User')
   
    # add serialization rules
    serialize_rules = ['-spots.collection']


class Spot(db.Model, SerializerMixin):
    __tablename__ = "spots"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String)
    name = db.Column(db.String)
    address = db.Column(db.String, default='No address added.')
    comment = db.Column(db.String, default='No comment added.')
    review = db.Column(db.Integer, default=0)
    image = db.Column(db.String, default='https://static-00.iconduck.com/assets.00/location-icon-512x512-vfbc251m.png')
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    collection_id = db.Column(db.Integer, ForeignKey('collections.id'), nullable=False)

    # add validation

    # add relationship 
    collection = db.relationship('Collection', back_populates='spots')
    
    # add serialization rules
    serialize_rules = ['-collection.spots']