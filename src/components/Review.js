import React from 'react';

export default function Review(props) {
  return(
    <div className="Review">
      <div className="review-left">
        <h2 className="rating">{props.review.rating}</h2>
        <h4 className="author">{props.review.author}</h4>
      </div>
      <div className="review-right">
        <h5>{props.review.subject}</h5>
        <p>{props.review.content}</p>
      </div>
    </div>
  )
}
