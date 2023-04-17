import React from "react";
import Header from "../components/Header/Header";
import hero from "../imgs/welcome.webp";

const Home = () => {
  return (
    <>
      <Header />
      <img src={hero} alt="hero" width="100%" height="auto" />
    </>
  );
};

export default Home;
