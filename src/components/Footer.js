import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer font-small bg-dark">
      <div className="container-fluid text-center text-md-left p-5 text-white main">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="row mt-3">
              <div className="col-md-6 col-sm-12 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold color">
                  Vonix Soft
                </h6>
                <hr className="deep-orange accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p className="tt">
                  <a href="#">HOME</a>
                </p>
                <p className="tt">
                  <a href="#about">ABOUT</a>
                </p>
                <p className="tt">
                  <a href="#projects">Our Statics</a>
                </p>
                <p className="tt">
                  <a href="#service">Services</a>
                </p>
              </div>

              

              <div className="col-md-6 col-sm-12 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold color">
                  Contact Us
                </h6>
                <hr className="deep-orange accent-2 mb-4 mt-0 d-inline-block mx-auto hr" />
                <p className="tt">
                  <i className="fas fa-home mr-3"></i> Arcade Plaza, near Rex
                  city, Faisalabad Pakistan
                </p>
                <p className="tt">
                  <i className="fas fa-globe mr-3"></i> vonixsoft.com
                </p>
                <a href="callto:+923187449700">
                <p className="tt">
                  <i className="fas fa-phone mr-3"></i> +92 318-7449700
                </p>
                </a>
                <p className="tt">
                  <i className="fas fa-clock mr-3"></i> MON-SAT 08AM to 05PM
                </p>
                <a href="skype:amanan339?chat">
                <p className="tt">
                  <i className="fab fa-skype mr-3"></i> amanan339
                </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="row facts-footer pt-2">
              <div className="col-6">
                <div>
                  <h5 className="color h5">1135</h5>
                  <span className="h5span">projects</span>
                </div>
                <div>
                  <h5 className="color h5">158615</h5>
                  <span className="h5span">hours work</span>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <h5 className="color h5">5</h5>
                  <span className="h5span">offices</span>
                </div>
                <div>
                  <h5 className="color h5">95</h5>
                  <span className="h5span">clients</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="row ml-4">
              <div className="col">
                <p>
                  <i className="fab fa-twitter text-center social"></i>
                </p>
              </div>
              <div className="col">
                <p>
                  <i className="fab fa-facebook-f text-center social"></i>
                </p>
              </div>
              <div className="col">
                <p>
                  <i className="fab fa-google-plus-g text-center social"></i>
                </p>
              </div>
              <div className="col">
                <p>
                  <i className="fab fa-linkedin-in text-center social"></i>
                </p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="container copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://vonixsoft.com"> Vonix Soft</a>
        </div>
      </div>
    </footer>
  );
}
