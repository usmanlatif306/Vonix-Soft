import React from "react";

export default function NavBar({ country }) {
  return (
    <section data-index="0" className="home" id="home">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navigation bgcolor">
        <p className="navbar-brand" href="#">
          Vonix Soft
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link activeNav" href="#home">
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="fas fa-user"></i> About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <i className="fas fa-briefcase"></i> Statics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                <i className="fas fa-cog"></i> Services
              </a>
            </li>
            {country === "Pakistan" ? (
              <li className="nav-item">
                <a className="nav-link" href="#cources">
                  <i className="fas fa-laptop-code"></i> Cources
                </a>
              </li>
            ) : null}
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link" href="#testimonials">*/}
            {/*    <i className="far fa-comment"></i>Testimonials*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link" href="#projects">*/}
            {/*    <i className="fa fa-user"></i> Projects*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="fas fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
