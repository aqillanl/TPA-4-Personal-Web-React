import React from "react";
import "./Home.css";
import Profil from "../../assets/1.jpg";
import Portfolio from "../portofolio/Portofolio";
import PageAbout from "../about/About";
import PageSkills from "../skills/Skills";

const PageHome = () => {
  return (
    <>
      <section className="home">
        <div className="home-text">
          <h1>
            Hi, <br />
            Perkenalkan saya <br />
            <span>AQILLA</span>
            <br />
          </h1>
        </div>
        <div className="home-img">
          <img src={Profil} alt="" width="350px" height="345px" />
          <div className="container">
            <p>Aqilla Noor Lazuardi</p>
          </div>
        </div>
      </section>
      <PageAbout />
      <PageSkills />
      <Portfolio />
    </>
  );
};

export default PageHome;
