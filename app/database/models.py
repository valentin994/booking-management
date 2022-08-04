from datetime import datetime

from pydantic import EmailStr
from sqlmodel import Field, SQLModel


class Booking(SQLModel, table=True):
    id: str = Field(default=None, primary_key=True)
    startDate: datetime
    endDate: datetime
    apartment: int
    email: EmailStr
    name: str
    phone: int
