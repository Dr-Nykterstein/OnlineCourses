import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ label, path, src, text, className }) => (
  <li className={`cards-item ${className}`}>
    <Link
      className="cards-item-link"
      to={{ pathname: path, state: { name: label } }}
    >
      <figure className="cards-item-pic-wrap" data-category={label}>
        <img className="cards-item-img" alt="Img" src={src} />
      </figure>
      <div className="cards-item-info">
        <h5 className="cards-item-text">{text}</h5>
      </div>
    </Link>
  </li>
);

export default CardItem;
