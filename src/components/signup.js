import React, { useState } from "react";
import axios from "axios";
import signimg from "../Images/sign up image.png";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { baseURL } from "./baseURL";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const handleclick = () => {
    const response = axios
      .post(`${baseURL}/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        toast.success("User registered successfully");
        navigate("/login", {
          replace: true,
        });
        setname("");
        setemail("");
        setpassword("");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="App">
      <div className="md:flex gap-10">
        <div>
          <img className="h-4/6" src={signimg} width={1100} alt=".." />
        </div>
        <div className="flex flex-col pt-16 px-4 md:px-16 gap-3 md:gap-8">
          <h2 className="font-normal text-3xl md:text-5xl">
            Create a new account
          </h2>
          <p>Enter your deatils below</p>
          <div class="form-floating mb-3">
            <input
              value={name}
              class="form-control"
              id="floatingInput"
              placeholder="Enter your name"
              onChange={(e) => setname(e.target.value)}
            />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              value={email}
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setemail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              value={password}
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            type="button"
            onClick={handleclick}
            class="btn btn-outline-secondary min-h-16"
          >
            Create Account
          </button>
          {/* <GoogleOAuthProvider clientId="189418374010-d61841o55g1nhhaqj73pov0o38v2dld2.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
                // console.log(credentialResponse);
                navigate("/", {
                  replace: true,
                });
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider> */}
          <div className="flex gap-8 text-center">
            <p>Already have an account?</p>
            <Link to="/Login">Log in</Link>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Signup;
