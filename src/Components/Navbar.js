import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-xl bg-white m-4">
        <a href="" className="navbar-brand">
          <img className="img-fluid" src={require("../Assets/images/logo.png")} alt="" />
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <p className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="mynavbar"
        >
          <ul className="navbar-nav">
            <il className="nav-item  p-2">
              <a href className="nav-link">
                <p>COMPANY</p>
              </a>
            </il>
            <il className="nav-item p-2">
              <a href className="nav-link">
                <p>EXPERTISE</p>
              </a>
            </il>
            <il className="nav-item p-2">
              <a href className="nav-link">
                <p>SERVICES</p>
              </a>
            </il>
            <il className="nav-item p-2">
              <a href className="nav-link">
                <p>CASE STUDIES</p>
              </a>
            </il>
            <il className="nav-item p-2">
              <a href className="nav-link">
                <p>INSIGHTS</p>
              </a>
            </il>
            <il className="nav-item p-2 bg-dark rounded-pill">
              <button className="btn btn-dark rounded-pill px-4" type="submit">
                <b>Get in Touch</b>
              </button>
            </il>
            <il className="nav-item p-2">
              <a href="" className="nav-link">
                <p>Work</p>
              </a>
            </il>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
