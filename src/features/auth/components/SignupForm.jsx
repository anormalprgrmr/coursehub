import { useState } from "react";
import styles from "./SignupForm.module.css";
import { validateEmail, validatePassword } from "../utils/auth.validator";

export default function SignupForm({ onSignup }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!data.name.trim()) return setError("Name is required");

    if (!validateEmail(data.email)) return setError("Invalid email");

    if (!validatePassword(data.password))
      return setError("Password must be at least 8 chars");

    if (data.password !== data.confirm)
      return setError("Passwords do not match");

    const result = onSignup({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (!result.success) return setError(result.message);

  }

  return (
    <form className={`${styles.form} mx-auto`} onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

      <input
        className={`${styles.form_input} form-control`}
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />

      <input
        className={`${styles.form_input} form-control`}
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />

      <input
        className={`${styles.form_input} form-control`}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <input
        className={`${styles.form_input} form-control`}
        type="password"
        name="confirm"
        placeholder="Confirm Password"
        onChange={handleChange}
        required
      />

      <button className="btn btn-primary w-100 mt-3">Sign Up</button>
    </form>
  );
}
