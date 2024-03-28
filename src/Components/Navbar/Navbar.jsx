import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ userData, logOut }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent navbar-dark  ">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 " to="">
            <h3>Noxe</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="tv">
                    Tv Shows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="people">
                    People
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item d-flex">
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-facebook mx-1"></i>
                </a>
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-instagram  mx-1"></i>
                </a>
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-twitter  mx-1"></i>
                </a>
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-linkedin  mx-1"></i>
                </a>
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-youtube  mx-1"></i>
                </a>
              </li>
              {userData ? (
                <li className="nav-item">
                  <Link onClick={logOut} className="nav-link text-white">
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="regester">
                      Regester
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
