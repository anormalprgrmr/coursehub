import { useEffect, useState } from "react";
import styles from "./ProfilePage.module.css";
import UserInfo from "../components/UserInfo";
import UserBookings from "../components/UserBooking";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../auth/auth.service";
import { getUserProfile, getUserBookings } from "../profile.service";

export default function ProfilePage() {
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const u = getUserProfile();
    if (!u) return nav("/login");
    setUser(u);

    setBookings(getUserBookings());
  }, []);

  function handleLogout() {
    logoutUser();
    nav("/");
  }

  if (!user) return null;

  return (
    <div className={styles.profile_container}>
      <h2 className={styles.profile_title}>Your Profile</h2>

      <UserInfo user={user} />
      <UserBookings bookings={bookings} />

      <button className={`btn btn-danger w-100 mt-3 ${styles.logout_btn}`} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
