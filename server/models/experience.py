from datetime import datetime

from sqlalchemy import Column, Integer, String, DateTime, Date, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from server import db, ma


class Experience(db.Model):
    __tablename__ = "tb_experience"

    id = Column(Integer, primary_key=True)

    institution_name = Column(String)

    id_type_of_experience = Column(Integer, ForeignKey("tb_domain.id"))
    type_of_experience = relationship("Domain", foreign_keys=[id_type_of_experience])

    current_experience = Column(Boolean)

    start_year = Column(Date)

    finish_year = Column(Date)

    details = Column(String)

    created_at = Column(DateTime, default=datetime.now)
    created_by = Column(String)
    updated_at = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    updated_by = Column(String)


class ExperienceSchema(ma.ModelSchema):
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
