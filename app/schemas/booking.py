from datetime import date

from pydantic import BaseModel


class Booking(BaseModel):
    id: int
    start_date: date
    end_date: date

    class Config:
        orm_mode = True
