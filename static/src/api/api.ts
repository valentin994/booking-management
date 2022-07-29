import axios from 'axios'
import { Booking } from '../interfaces/Booking'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getBookings = () => {
  axiosClient.get<Array<Booking>>('/api/v1/booking/').then(res => {
    return res.data
  }).catch(err => {
    console.log('Unexpected error occured', err)
    return err
  })
}

const addBooking = (booking: Booking) => {
  console.log(booking)
}

const deleteBooking = () => {
  console.log('delete booking')
}

export {
  getBookings,
  addBooking,
  deleteBooking
}
