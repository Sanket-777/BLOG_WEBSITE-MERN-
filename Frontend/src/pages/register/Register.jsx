import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error,seterror] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror(false);
     try{
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
     }
     catch(err)
     {
      seterror(true);
     } 
  };

  return (
    <div className="registerwrapper">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className="registerform" onSubmit={handlesubmit}>
        <h3>Register Here</h3>
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setusername(e.target.value)}
        />

        <label for="username">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />

        <label for="password">Password</label>
        <input type="password" placeholder="Confirm Password" />

        <button className="regbuttons" type="submit">
          Register
        </button>

        <button className="regbuttons">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {error  && <span className="errordiv" style={{color:"red",margin:"80px"}}>Something went Wrong !!!</span>}
      </form>
    </div>
  );
}
