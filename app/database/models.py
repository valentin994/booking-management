from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.orm import relationship

from .db import Base


class Booking(Base):
    __tablename__ = "booking"

    id = Column(Integer, primary_key=True, index=True)
    start_date = Column(Date)
    end_date = Column(Date)
    apartment = Column(Integer)
    comments = relationship("Comments")


class Comments(Base):
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(32))
    post = Column(String(128))
