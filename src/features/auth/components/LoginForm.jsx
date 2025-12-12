import { useState } from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const res = onLogin(email, pass);

    if (!res.success) return setError("Invalid email or password");
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

      <input className="form-control mb-2"
             placeholder="Email"
             onChange={(e) => setEmail(e.target.value)}
             required />

      <input className="form-control mb-3"
             type="password"
             placeholder="Password"
             onChange={(e) => setPass(e.target.value)}
             required />

      <button className="btn btn-primary w-100">Login</button>
    </form>
  );
}
