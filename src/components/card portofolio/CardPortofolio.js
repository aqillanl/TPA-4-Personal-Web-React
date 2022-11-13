import React from "react";
import PropTypes from "prop-types";
import "./CardPortfolio.css";

const CardPortfolio = ({ img, link, name, desc }) => {
  return (
    <>
      <div className="card-porto">
        <img src={img} alt={name} width={300} height={170} />
        <h3>{name}</h3>
        <p>{desc}</p>
        <a href={link} target="_blank">
          Lihat Portfolio
        </a>
      </div>
    </>
  );
};

CardPortfolio.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardPortfolio;
