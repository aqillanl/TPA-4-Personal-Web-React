import React from "react";
import "./Skills.css";
import Css from "../../assets/css.png";
import Html from "../../assets/html.png";
import Js from "../../assets/js.png";

const PageSkills = () => {
  return (
    <>
      <div className="skills">
        <section className="skillcontainer">
          <h1>SKILLS</h1>
          <div className="skillcard">
            <div className="card">
              <img src={Html} className="skillpict" alt="" />
              <h3 className="skillteks">HTML</h3>
            </div>
            <div className="card">
              <img src={Css} className="skillpict" alt="" />
              <h3 className="skillteks">CSS</h3>
            </div>
            <div className="card">
              <img src={Js} className="skillpict" alt="" />
              <h3 className="skillteks">JavaScript</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageSkills;
