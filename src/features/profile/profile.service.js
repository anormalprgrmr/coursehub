import { getCurrentUser } from "../auth/auth.service";
import {bookingHistory} from '../courses/data'

export function getUserProfile() {
  return getCurrentUser();
}

export function getUserBookings() {
  return bookingHistory
}
