from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .db import Base


class Booking(Base):
    __tablename__ = "booking"

    id = Column(Integer, primary_key=True, index=True)
    start_date = Column(Date)
    end_date = Column(Date)
    apartment = Column(Integer)
    comments = relationship("Comments", back_populates="booking")


class Comments(Base):
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(32))
    post = Column(String(128))
    booking_id = Column(Integer, ForeignKey("booking.id"))
    booking = relationship("Booking", back_populates="comments")
