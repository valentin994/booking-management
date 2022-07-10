# Booking Backend

## Introduction

This is the backend for Vila Prgic website, the site is used for renting out apartments.
The API should support a booking and review system for the website to consume.
For the database SQLite will be used.

## Installation

- Activate your virtual environment `source venv/bin/activate`
- Install all packages `poetry install`
- Install pre-commit hooks with `pre-commit install`
- Run the application `poetry run uvicorn app.main:app --reload`

## Todos

- Create CRUD for Bookings
    - Create Booking
        - Ensure that the dates are atleast 2 days apart
        - Start date should be "smaller"
        - Ensure that the selected dates are free
- Apartment model
- Add exception handling
- Create Routes for Bookings
- Create CRUD for Comments
- Create Routes for Comments
- Create Routes for apt
- Create Tests
- Add tests and coverage to pre-commit
- Add alembic

## Possible enchantments

- Auto mail response after booking
