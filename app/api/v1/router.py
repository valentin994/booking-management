from fastapi import APIRouter
from .routes.booking import router

main_router = APIRouter()

main_router.include_router(router, prefix="/booking", tags=["Booking"])
