from datetime import date

from pydantic import BaseModel


class Booking(BaseModel):
    id: int
    start_date: date
    end_date: date
    apartment: int

    class Config:
        orm_mode = True


class Comments(BaseModel):
    id: int
    name: str
    post: str

    class Config:
        orm_mode = True
