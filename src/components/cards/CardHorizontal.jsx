import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const CardHorizontal = (props) => {
  const {
    className,
    starRating,
    path,
    label,
    src,
    title,
    city,
    description,
    rating,
  } = props;
  const numbers = parseInt(starRating, 10);

  return (
    <li className={`cards-horizontal ${className}`}>
      <div className="cards-horizontal-link">
        <Link to={path}>
          <figure className="cards-horizontal-pic-wrap" data-category={label}>
            <img className="cards-horizontal-img" alt="Img" src={src} />
          </figure>
        </Link>
        <div className="cards-horizontal-info">
          <Link className="no-underline" to={path}>
            <h3 className="cards-horizontal-title">
              {title}
              {[...Array(numbers)].map((x) => (
                <i className="fas fa-star" key={x.id} />
              ))}
              <i className="far fa-thumbs-up" />
            </h3>
          </Link>
          <h3 className="cards-horizontal-city">{city}</h3>
          <h3 className="cards-horizontal-description">{description}</h3>
        </div>
        <div className="cards-horizontal-detail">
          <figure className="cards-horizontal-rating" data-rating={rating} />
          <div className="cards-horizontal-button">
            <Link to={path}>
              <Button buttonStyle="btn-outline">More</Button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardHorizontal;
