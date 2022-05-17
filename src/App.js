import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import axios from "axios";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userCountry, setUserCountry] = useState(null);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1500);
    axios
      .get(
        "https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3"
      )
      .then((res) => {
        setUserCountry(res.data.country_name);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);
  return <div>{isLoading ? <Loading /> : <Home country={userCountry} />}</div>;
}
