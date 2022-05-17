import React from "react";

export default function SingleService({ service }) {
  return (
    <div className="col-8 offset-2 col-sm-6 col-md-4 offset-sm-0 mb-4">
      <div className="service-box">
        <figure className="front">
          <i className={service.icon}></i>
          <h3>{service.title}</h3>
        </figure>
        <figure className="back">
          <i className={service.icon}></i>
          <h5>{service.title}</h5>
          <p className="text-justify">{service.detail}</p>
        </figure>
      </div>
    </div>
  );
}
