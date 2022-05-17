import React, { useEffect, useState } from "react";
import HeroSection from "../components/header/HeroSection";
import NavBar from "../components/header/NavBar";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import HappyCustomer from "../components/HappyCustomer";
import OurNumbers from "../components/OurNumbers";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Cources from "../components/Cources";

export default function Home({ country }) {
  return (
    <div>
      <NavBar country={country} />
      <HeroSection />
      <AboutUs />
      {/*<HappyCustomer />*/}
      <OurNumbers />
      <Services />
      {country === "Pakistan" ? <Cources /> : null}
      <ContactUs />
      <Footer />
    </div>
  );
}
