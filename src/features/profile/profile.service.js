import { getCurrentUser } from "../auth/authService";

export function getUserProfile() {
  return getCurrentUser();
}

export function getUserBookings() {
  const user = getCurrentUser();
  if (!user) return [];

  const all = JSON.parse(localStorage.getItem("bookings") || "[]");
  return all.filter(b => b.userId === user.id);
}
