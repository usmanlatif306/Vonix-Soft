import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [isPageLoad, setIsPageLoad] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsPageLoad(true);
    }, 2000);
  }, []);

  return (
    <div className="banner">
      <div className="img-overrely">
        <div className="banner-content">
          <h1 className="main-text">We are Vonix Soft</h1>
          <h2>We Offer {isPageLoad ? <span></span> : ""}</h2>
          <p className="second-text">We are offering high quality services</p>
          <a href="#contact" className="btn btn-danger btn-contact">
            Feel Free to Contact
          </a>
        </div>
      </div>
    </div>
  );
}
