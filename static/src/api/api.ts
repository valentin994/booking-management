import axios from 'axios'
import { Booking } from '../interfaces/Booking'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getBookings = async () => {
  try {
    const { data } = await axiosClient.get<Array<Booking>>('/api/v1/booking/')
    return data
  } catch (error) {
    console.log(error)
  }
}

const addBooking = async (booking: Booking) => {
  try {
    const { data } = await axiosClient.post<Booking>(
      '/api/v1/booking/',
      booking
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteBooking = async (id: string) => {
  try {
    const { data } = await axios.delete(`/api/v1/booking/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { getBookings, addBooking, deleteBooking }
