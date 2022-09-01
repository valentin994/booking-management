import { rest } from 'msw'
import React from 'react'
import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

export const bookings = [
  {
    id: 'string',
    startDate: '2022-08-24T08:32:40.902Z',
    endDate: '2022-08-24T08:32:40.902Z',
    apartment: 0,
    email: 'user@example.com',
    name: 'string',
    phone: 0
  }
]
export const handlers = [
  rest.get('http://localhost:8000/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bookings))
  })
]

it('Should return all bookings fetched from the API', async () => {
  render(<App />)
  expect(screen.getByText('Booking Management'))
})
