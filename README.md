# Vila Prgic

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

- Fix pylint warnings
- Create Models Booking/Comments
- Create CRUD for Bookings
- Create Routes for Bookings
- Create CRUD for Comments
- Create Routes for Comments
- Create Tests
- Add tests and coverage to pre-commit
- Add alembic

## Possible enchantments

- Auto mail response after booking
