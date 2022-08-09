import pytest


@pytest.fixture
def booking_item():
    return {
        "id": "string",
        "startDate": "2022-08-09T10:44:21.779000",
        "endDate": "2022-08-09T10:44:21.779000",
        "apartment": 0,
        "email": "user@example.com",
        "name": "string",
        "phone": 0,
    }
