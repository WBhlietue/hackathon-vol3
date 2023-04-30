import React, { useState } from "react";
import { auth } from "./firebase";
import "../css/Signup.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="grid-container">
        <div className="left-column">
          <img src={require("../assets/images/photo.jpg")}></img>
        </div>
        <div className="grid-item">
          <h2>Тавтай морилно уу</h2>
          <form onSubmit={handleLogin}>
            <table>
              <tr>
                <td>
                  <label>Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <label>Password:</label>
                </td>
                <td>
                    <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password..."
                    />
                    <i className="fa-solid fa-eye" onClick={(e)=>{
                        toggleShowPassword();
                    }}></i>
                    </div>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                     <Link to="/" type="submit" className="signup">Нэвтрэх</Link>
                  <Link to="/payment" className="signup">
                    Бүртгүүлэх
                  </Link>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
