from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.crud.crud import create_booking
from app.database.db import get_db
from app.schemas.booking import Booking


router = APIRouter(prefix="/booking")


@router.post("/", tags=["Booking"])
def add_booking(booking: Booking, database: Session = Depends(get_db)):
    return create_booking(database, booking)
