from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.crud.crud import (
    create_booking,
    delete_booking_by_id,
    fetch_all_bookings,
    get_booking_by_id,
)
from app.database.db import get_db
from app.database.models import Booking


router = APIRouter(prefix="/booking", tags=["Booking"])


@router.post(
    "/",
    response_model=Booking,
    status_code=status.HTTP_201_CREATED,
)
def add_booking(booking: Booking, database: Session = Depends(get_db)):
    return create_booking(database, booking)


@router.get("/", response_model=list[Booking])
def get_all_bookings(
    skip: int = 0, limit: int = 100, database: Session = Depends(get_db)
) -> list[Booking]:
    return fetch_all_bookings(database, skip, limit)


@router.get("/{booking_id}/", response_model=Booking)
def get_booking(
    booking_id: str, database: Session = Depends(get_db)
) -> Booking:
    return get_booking_by_id(database, booking_id)


@router.delete("/{booking_id}/")
def delete_booking(
    booking_id: str, database: Session = Depends(get_db)
) -> dict:
    return delete_booking_by_id(database, booking_id)
