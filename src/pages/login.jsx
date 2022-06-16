import React, { useRef,useState } from "react";
import "../css/login.css";
import logou from "../images/person.svg";
import logopass from "../images/key.svg";
import logo from "../images/banana.png";
import { Toaster, toast } from "react-hot-toast";

export default function Login() {

  return (
    <form className="login">
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
                />
              </div>
              <div className="d-grid gap-2 pt-3">
                <button
                  className="btn btn-success btn-lg btn-block"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
