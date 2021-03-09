import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';

function CardHorizontal(props) {

  const numbers = parseInt(props.starRating);

  return (
    <>
      <li className={`cards-horizontal ${props.class}`}>
        <div className='cards-horizontal-link'>
          <Link to={props.path}>
            <figure className='cards-horizontal-pic-wrap' data-category={props.label}>
              <img
                className='cards-horizontal-img'
                alt='Image'
                src={props.src}
              />
            </figure>
          </Link>
          <div className='cards-horizontal-info'>
            <Link className='no-underline' to={props.path}>
              <h3 className='cards-horizontal-title'>{props.title}
                {[...Array(numbers)].map((x, i) =>
                  <i className="fas fa-star" key={i} />
                )}
                <i className="far fa-thumbs-up"></i>
              </h3>
            </Link>
            <h3 className='cards-horizontal-city'>{props.city}</h3>
            <h3 className='cards-horizontal-description'>{props.description}</h3>
          </div>
          <div className='cards-horizontal-detail'>
            <figure className='cards-horizontal-rating' data-rating={props.rating}></figure>
            <div className='cards-horizontal-button'>
              <Link to={props.path}>
                <Button buttonStyle="btn-outline">More</Button>
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardHorizontal;