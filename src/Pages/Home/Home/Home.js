import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Reviews></Reviews>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
