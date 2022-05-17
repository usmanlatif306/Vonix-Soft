import React from "react";
import { courses } from "../data";

export default function Cources() {
  return (
    <section id="cources" className="cources mb-5">
      <h1 className="text-danger text-uppercase text-center">Cources</h1>
      <p className="about-text">WHAT WE OFFER</p>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <hr />
          </div>
          <div className="col-2 text-center">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="col-5">
            <hr />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          {courses.map((item) => (
            <div
              className="col-6 offset-3 offset-md-0 col-lg-4 mb-3"
              key={item.id}
            >
              <div className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top card-img"
                  src={item.img}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary text-uppercase">
                    {item.title}
                  </h5>
                  <small>{item.category}</small>
                  <hr />
                  <p className="text-muted d-flex justify-content-between">
                    <span>
                      <i className="far fa-calendar"></i>&nbsp;{item.duration}{" "}
                    </span>
                    <span>
                      <i className="far fa-clock"></i>&nbsp; {item.time}
                    </span>
                  </p>
                  {/* <p className="card-text">
                  HTML is the standard markup language for creating Web pages.
                  CSS describes how HTML elements are to be displayed on screen,
                  paper, or in other media
                </p>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
