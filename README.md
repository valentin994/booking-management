# Booking Backend

## Introduction

This is the backend for managing bookings, the site is used for renting out apartments.
The API should support a booking and review system for the website to consume.
For the database SQLite will be used.

## Installation

- Activate your virtual environment `source venv/bin/activate`
- Install all packages `poetry install`
- Install pre-commit hooks with `pre-commit install`
- Run the application `poetry run uvicorn app.main:app --reload`

## Todos

- Make a landing admin page
  - Separate into components
  - Update Design
  - Add theme
- Update pre-commit for static folder (react app)
- Add Batch delete possibility
- Make a secure login for admin panel
- Create CRUD for Bookings
    - Create Booking
        - Ensure that the dates are atleast 2 days apart
        - Start date should be "smaller"
        - Ensure that the selected dates are free
- Add admin panel
- Apartment model
- Add exception handling
- Add comments model
- Create Routes for Bookings
- Create CRUD for Comments
- Create Routes for Comments
- Create Routes for apt
- Create Tests
- Add tests and coverage to pre-commit
- Add docstrings
- Add alembic

## Possible enchantments

- Auto mail response after booking
