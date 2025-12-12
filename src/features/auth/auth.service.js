import { v4 as uuid } from "uuid";

const USERS_KEY = "users";
const CURRENT_KEY = "currentUser";

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function signupUser({ name, email, password }) {
  const users = getUsers();

  // check duplicate email
  if (users.some(u => u.email === email)) {
    return { success: false, message: "Email already registered" };
  }

  const newUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  users.push(newUser);
  saveUsers(users);

  localStorage.setItem(CURRENT_KEY, JSON.stringify(newUser));

  return { success: true, user: newUser };
}

export function loginUser(email, password) {
  const users = getUsers();
  const found = users.find(u => u.email === email && u.password === password);

  if (!found) return { success: false };

  localStorage.setItem(CURRENT_KEY, JSON.stringify(found));
  return { success: true, user: found };
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_KEY);
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_KEY));
}

export function isAuthenticated() {
  return !!getCurrentUser();
}
