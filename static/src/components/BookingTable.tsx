import { Booking } from '../interfaces/Booking'
import {getBookings} from "../api/api";

function BookingTable () {
  const onGet = () => {
    getBookings()
  }
  return (
        <div>
          <button onClick={onGet}>fdsfsd</button>
        </div>
  )
}
export default BookingTable
