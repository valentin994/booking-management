from datetime import date

from pydantic import BaseModel, EmailStr


class Booking(BaseModel):
    id: int
    start_date: date
    end_date: date
    apartment: int
    email: EmailStr
    # name: str
    # phone: int

    class Config:
        orm_mode = True


class Comments(BaseModel):
    id: int
    name: str
    post: str

    class Config:
        orm_mode = True
