import React, { Component } from 'react';
import style from '../styles/App.css';
import ReactStars from 'react-stars';

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
        <div className={style.review}>
          <div className={style.avatarHolder}>
            <img className={style.avatarImage} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
            <a className={style.avatarUsername}>Mario Santamaria</a>
          </div>
          <div className={style.starHolder}>
            <div className={style.stars}>
              <ReactStars className={style.reactStars}
                count={5}
                size={24}
                value={3}
                color2={'#ffd700'}
                edit={false}
              />
            </div>
            <div className={style.reviewTitle}>This is the title!</div>
          </div>
          <div className={style.reviewData}>
            <a className={style.reviewText}>I love it! I use it to play music and I also use it to turn on/off my Sengled Smart Bulb.I don't know why I waited so long to get one of these, but I will be ordering one for my parent's home also.</a>
            <a className={style.reviewTime}>Published 1 hour ago</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;