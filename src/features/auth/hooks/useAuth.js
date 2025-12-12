import { useState } from "react";
import { loginUser, signupUser, logoutUser, getCurrentUser } from "../auth.service";

export function useAuth() {
  const [user, setUser] = useState(getCurrentUser());

  function login(email, password) {
    const res = loginUser(email, password);
    if (res.success) setUser(res.user);
    return res;
  }

  function signup(data) {
    const res = signupUser(data);
    if (res.success) setUser(res.user);
    return res;
  }

  function logout() {
    logoutUser();
    setUser(null);
  }

  return { user, login, signup, logout };
}
