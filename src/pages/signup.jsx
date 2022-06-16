import React, { useRef } from "react";
import "../css/login.css";
import logou from "../images/person.svg";
import logopass from "../images/key.svg";
import logo from "../images/banana.png";
import Axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function Signup() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);


  function register(){
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const password2 = password2Ref.current.value;
    if(password !== password2){
      toast.error("Las contraseñas no coinciden");
    }else if(username === "" || password === "" || password2 === "") {
      toast.error("Todos los campos son obligatorios");
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
              <h3 className="sub">Registrar</h3>
              <div className="input-group mb-3 pt-2">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <img className="img" src={logou} alt="correo" />
                  </span>
                </div>
                <input
                  id="username"
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
                  aria-label="password"
                  aria-describedby="basic-addon2"
                  ref={passwordRef}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon2">
                    <img src={logopass} alt="password" />
                  </span>
                </div>
                <input
                  id="password2"
                  type="password"
                  className="form-control"
                  placeholder="Re type password"
                  aria-label="password"
                  aria-describedby="basic-addon2"
                  ref={password2Ref}
                />
              </div>
              <div className="d-grid gap-2 pt-3">
                <button
                  id="button"
                  className="btn btn-success btn-lg btn-block"
                  onClick={register}
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
