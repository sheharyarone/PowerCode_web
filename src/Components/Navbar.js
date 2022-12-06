import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-xl m-4">
        <a href="" className="navbar-brand">
          <img
            className="img-fluid"
            src={require("../Assets/images/logo.png")}
            alt=""
          />
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
            <il className="nav-item p-2 mt-1 rounded-pill">
              <badge className="badge bg-dark text_size_card px-5 py-2 rounded-4">
                Get estimation
              </badge>
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
