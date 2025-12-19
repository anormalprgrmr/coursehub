import SignupForm from "../components/SignupForm";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import style from "./SignupPage.module.css";

export default function SignupPage() {
  const auth = useAuth();
  const nav = useNavigate();

  function handleSignup(data) {
    const res = auth.signup(data);
    if (res.success) nav("/");
    return res;
  }

  return (
    <div className="container d-flex justify-content-center align-items-start mt-5">
      <div className={style.signup_box} style={{ width: 400 }}>
        <h3 className="mb-3 text-center">Create Account</h3>
        <SignupForm onSignup={handleSignup} />
      </div>
    </div>
  );
}
