from fastapi.testclient import TestClient
from sqlmodel import Session, SQLModel, create_engine

from app.database.db import get_db
from app.main import app


SQLALCHEMY_DATABASE_URL = "sqlite:///./test_sql_app.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SQLModel.metadata.create_all(engine)


def override_get_db():
    with Session(engine) as session:
        yield session


app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)


def test_create_booking(booking_item):
    response = client.post("/api/v1/booking/", json=booking_item)
    assert response.status_code == 201
    assert response.json() == booking_item


def test_get_by_id_booking(booking_item):
    response = client.get(f"/api/v1/booking/{booking_item['id']}/")
    assert response.status_code == 200
    assert response.json() == booking_item


def test_get_all_booking(booking_item):
    response = client.get("/api/v1/booking/")
    assert response.status_code == 200
    assert response.json() == [booking_item]


def test_delete_booking(booking_item):
    response = client.delete(f"/api/v1/booking/{booking_item['id']}/")
    assert response.status_code == 200
    assert response.json() == {
        "message": f"Deleted booking with id: {booking_item['id']}"
    }
