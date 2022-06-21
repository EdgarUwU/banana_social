import React, { useRef } from "react";
import "../css/login.css";
import logou from "../images/person.svg";
import logopass from "../images/key.svg";
import logo from "../images/banana.png";
import { Toaster, toast } from "react-hot-toast";
import Axios from "axios";

export default function Login() {
  
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  function log() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if(username === "" || password === "") {
      toast.error("Todos los campos son obligatorios");
    }else{
      Axios.post("http://localhost:3001/login", {
        username: username,
        password: password
      }).then(res => {
        if(res.data === "Login Successful") {
          console.log(res.data);
          toast.success("Bienvenido");
          localStorage.setItem("token", res.data);
          window.location.href = "/Dashboard";
        }else{
          toast.error("Usuario o contraseña incorrectos");
        }
      }
      ).catch(err => {
        toast.error("Error");
      }
      );
    }
    
  }

  return (
    <div className="login">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="row">
        <div className="col-sm-4 mt-5">
          <div className="card pt-4">
            <div className="card-header text-center">
              <h2 className="title">I'm Banana</h2>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="card-body">
              <h3 className="sub">Login</h3>
              <div className="input-group mb-3 pt-">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <img className="img" src={logou} alt="correo" />
                  </span>
                </div>
                <input
                  type="username"
                  className="form-control"
                  placeholder="username"
                  aria-label="username"
                  aria-describedby="basic-addon1"
                  ref={usernameRef}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon2">
                    <img src={logopass} alt="password" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  aria-label="contraseña"
                  aria-describedby="basic-addon2"
                  ref={passwordRef}
                />
              </div>
              <div className="d-grid gap-2 pt-3">
                <button
                  className="btn btn-success btn-lg btn-block"
                  onClick={log}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
