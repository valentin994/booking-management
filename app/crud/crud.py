from sqlalchemy.orm import Session

from ..database import models
from ..schemas import booking


def create_booking(
    database: Session, booking: booking.Booking
) -> models.Booking:
    db_booking = models.Booking(**booking.dict())
    database.add(db_booking)
    database.commit()
    database.refresh(db_booking)
    return db_booking


def fetch_all_bookings(
    database: Session, skip: int = 0, limit: int = 100
) -> list[models.Booking]:
    return database.query(models.Booking).offset(skip).limit(limit).all()
