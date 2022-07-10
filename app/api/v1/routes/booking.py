from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.crud.crud import create_booking, fetch_all_bookings
from app.database.db import get_db
from app.schemas.booking import Booking


router = APIRouter(prefix="/booking", tags=["Booking"])


@router.post("/")
def add_booking(booking: Booking, database: Session = Depends(get_db)):
    return create_booking(database, booking)


@router.get("/")
def get_all_bookings(
    skip: int = 0, limit: int = 100, database: Session = Depends(get_db)
):
    return fetch_all_bookings(database, skip, limit)
