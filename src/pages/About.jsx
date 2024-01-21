import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/images/about.png";

const About = () => {
  return (
    <div>
      <img alt="about image" src={aboutImage} width="100%" />
      <div className="about-content-box">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="highlight-box">
          <h3>Your destination is waiting. Your van is ready.</h3>
          <Link to="vans">Explore our vans</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
