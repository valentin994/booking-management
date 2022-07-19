from datetime import date

from pydantic import EmailStr
from sqlmodel import Field, SQLModel


class Booking(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    start_date: date
    end_date: date
    apartment: int
    email: EmailStr
    name: str
    phone: int
