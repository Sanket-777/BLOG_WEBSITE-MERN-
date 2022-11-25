import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="loginwrapper">
      <div className="backgroundd">
        <div className="shapee"></div>
        <div className="shapee"></div>
      </div>
      <form className="formlogin">
        <h3>Login Here</h3>
        <label for="username">Email</label>
        <input type="email" placeholder="Email" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" />

        <button className="loginbutt">Login</button>
        <button className="loginbutt">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
