import React from 'react';

export default function PopCard(props) {
  const {
    name,
    description,
    language,
    rating,
    title,
    poster,
    genre,
    director,
  } = props;

  return (
    <div>
      <div className='pop-card'>
        <div className='card-image'>
          <img src={poster} alt='poster' />
          <span className='card-title'>
            {name}
          </span>
        </div>
        <div className='card-content'>
          <p>{description}</p>
        </div>
        <div className='card-action'>
          <a href='#'>{language}</a>
          <a href='#'>{rating}</a>
          <a href='#'>{title}</a>
          <a href='#'>{genre}</a>
          <a href='#'>{director}</a>
        </div>
      </div>
    </div>
  );
}
