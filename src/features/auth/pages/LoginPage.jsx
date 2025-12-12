import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const auth = useAuth();
  const nav = useNavigate();

  function handleLogin(email, pass) {
    const res = auth.login(email, pass);
    if (res.success) nav("/profile"); // redirect to profile
    return res;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3 className="mb-3">Login</h3>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
