from datetime import datetime

from sqlalchemy import Column, Integer, String, DateTime, Date

from server import db, ma


class Person(db.Model):
    __tablename__ = "tb_person"

    id = Column(Integer, primary_key=True)

    name = Column(String)

    email = Column(String)

    description = Column(String)

    birth_date = Column(Date)

    created_at = Column(DateTime, default=datetime.now)
    created_by = Column(String)
    updated_at = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    updated_by = Column(String)


class PersonSchema(ma.ModelSchema):
    class Meta:
        fields = (
            "id",
            "name",
            "email",
            "description",
            "birth_date",
            "created_at",
            "created_by"
        )
