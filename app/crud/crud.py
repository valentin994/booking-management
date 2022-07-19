# pylint: disable=W0143
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.database.models import Booking


def create_booking(database: Session, booking_data: Booking) -> Booking:
    db_booking = Booking.from_orm(booking_data)
    database.add(db_booking)
    database.commit()
    database.refresh(db_booking)
    return db_booking


def fetch_all_bookings(
    database: Session, skip: int = 0, limit: int = 100
) -> list[Booking]:
    return database.query(Booking).offset(skip).limit(limit).all()


def get_booking_by_id(database: Session, booking_id: int) -> Booking:
    booking_item = (
        database.query(Booking).filter(Booking.id == booking_id).first()
    )
    if not booking_item:
        raise HTTPException(404, f"Booking with id {booking_id} not found!")
    return booking_item


def delete_booking_by_id(database: Session, booking_id: int) -> dict:
    booking_item = (
        database.query(Booking).filter(Booking.id == booking_id).first()
    )
    if not booking_item:
        raise HTTPException(404, f"Booking with id {booking_id} not found!")
    database.delete(booking_item)
    database.commit()
    return {"message": f"Deleted booking with id: {booking_id}"}
