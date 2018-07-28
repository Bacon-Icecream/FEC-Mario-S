import React, { Component } from 'react';
import axios from 'axios';
import style from '../styles/Review.css';
import ReviewEntry from './ReviewEntry';

class Review extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reviews: []
    }

    axios.get('/api/customer-reviews/reviewsItem', {
      params: {
        itemId: props.itemId
      }
    })
    .then((item) => {
      this.setState({
        reviews: item.data.slice(0, 10)
      });
    })
    .catch(error => console.error('error fetching item:', error));
  }

  render() {
    return (
      <div className={style.recentReviews}>
        <div className={style.recentTitle}>Most recent customer reviews</div>
        {this.state.reviews.map((review, index) => (
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