from sqlalchemy import Column, Date, Integer

from .db import Base


class Booking(Base):
    __tablename__ = "booking"

    id = Column(Integer, primary_key=True, index=True)
    start_date = Column(Date)
    end_date = Column(Date)
