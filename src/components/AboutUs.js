import React, { useState } from "react";

export default function AboutUs() {
  const [misson, setMisson] = useState(
    "Our Mission Lorem ipsum dolor sit amet consecteturadipisicingelit Id voluptates distinctio, ad quia error illum ullam cumque magni. Nulla dolorum, dolor voluptate iusto culpa nemo quisquam quiasimilique hic perferendis."
  );
  return (
    <section className="about-us mb-5" id="about">
      <h1>
        <span>About</span> Us
      </h1>
      <p className="about-text">Customer satisfaction is our first priority</p>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <hr />
          </div>
          <div className="col-2 text-center">
            <i className="fa fa-user"></i>
          </div>
          <div className="col-5">
            <hr />
          </div>
        </div>
      </div>

      <div className="container mt-lg-5 mt-lg-4 mt-sm-5">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h3 className="pb-2">
              We Are <strong>Vonix Soft</strong>
            </h3>
            <hr />
            <p className="pt-2">
              We started our company in mid of 2014 called IT' Experts Place,{" "}
              <a
                href="https://www.facebook.com/IT-Experts-Place-188290664692873/"
                target="_blank"
              >
                Facebook page link{" "}
              </a>
              and now 2 years back we convert this to Vonix Soft and started
              this. We always hire experienced developers that's why now we have
              5+, 8+ years of experience developers in our software house
            </p>
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="about-btn"*/}
            {/*  onClick={(e) => {*/}
            {/*    e.preventDefault();*/}
            {/*    setMisson(*/}
            {/*      "Our Mission Lorem ipsum dolor sit amet consecteturadipisicingelit Id voluptates distinctio, ad quia error illum ullam cumque magni. Nulla dolorum, dolor voluptate iusto culpa nemo quisquam quiasimilique hic perferendis."*/}
            {/*    );*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Our Mission*/}
            {/*</a>*/}
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="about-btn"*/}
            {/*  onClick={(e) => {*/}
            {/*    e.preventDefault();*/}
            {/*    setMisson(*/}
            {/*      " Our Adventure Lorem ipsum dolor sit amet consecteturadipisicingelit Id voluptates distinctio, ad quia error illum ullam cumque magni. Nulla dolorum, dolor voluptate iusto culpa nemo quisquam quiasimilique hic perferendis."*/}
            {/*    );*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Our Adventure*/}
            {/*</a>*/}
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="about-btn"*/}
            {/*  onClick={(e) => {*/}
            {/*    e.preventDefault();*/}
            {/*    setMisson(*/}
            {/*      " Our Guarantees Lorem ipsum dolor sit amet consecteturadipisicingelit Id voluptates distinctio, ad quia error illum ullam cumque magni. Nulla dolorum, dolor voluptate iusto culpa nemo quisquam quiasimilique hic perferendis."*/}
            {/*    );*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Our Guarantees*/}
            {/*</a>*/}
            {/*<p className="pt-4">{misson}</p>*/}
            {/*<a href="#about" className="btn btn-about mb-3">*/}
            {/*  Learn More About Us*/}
            {/*</a>*/}
          </div>
          <div className="col-lg-6 col-12 main-about-img mb-sm-3 mb-md-0">
            <img
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/how-to-become-a-great-consultant-5e2884fc16f89.png"
              alt="about us image"
              className="about-img img-fluid"
            />
            <div className="image-overrelay">
              <h3>
                Why <strong>Choose Us</strong>
              </h3>
              <ul>
                <li>Clean Code & Design</li>
                <li>Responsive Layout</li>
                <li>Powerful Documentation</li>
                <li>Browser Compatibility</li>
                <li>Easy Customization</li>
                <li>& Much More ...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
