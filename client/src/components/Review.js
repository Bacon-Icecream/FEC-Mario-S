import React, { Component } from 'react';
import style from '../styles/Review.css';
import ReviewEntry from './ReviewEntry';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: '5b56129c6c1182305c88898f'
    }
  }

  render() {
    return (
      <div className={style.recentReviews}>
        <div className={style.recentTitle}>Most recent customer reviews</div>
        <ReviewEntry />
      </div>
    );
  }
}

export default Review;