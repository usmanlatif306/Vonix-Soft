import React from "react";
import { servicesProvide } from "../data";
import SingleService from "./SingleService";

export default function Services() {
  return (
    <section className="services" id="service">
      <h1>
        <span>Our</span> Services
      </h1>

      <p className="about-text">WHAT WE DOING</p>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <hr />
          </div>
          <div className="col-2 text-center">
            <i className="fa fa-cogs"></i>
          </div>
          <div className="col-5">
            <hr />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          {servicesProvide.map((item) => (
            <SingleService service={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
