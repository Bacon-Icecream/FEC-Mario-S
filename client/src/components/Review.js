import React, { Component } from 'react';
import style from '../styles/Review.css';
import ReviewEntry from './ReviewEntry';

class Review extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <div className={style.recentReviews}>
        <div className={style.recentTitle}>Most recent customer reviews</div>
        {this.props.reviews.map((review, index) => (
          <ReviewEntry
            review={review}
            key={review+index}
          />
        ))}
      </div>
    );
  }
}

export default Review;