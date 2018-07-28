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
      console.log(item.data);
      this.setState({
        images: item.data.slice(0, 10)
      });
      console.log(this.state.images)
    })
    .catch(error => console.error('error fetching item:', error));
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