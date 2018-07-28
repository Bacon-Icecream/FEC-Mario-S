import React from 'react';
import style from '../styles/ReviewEntry.css'
import ReactStars from 'react-stars';
import TimeAgo from 'react-timeago'

function ReviewEntry(props) {

    return (
      <div className={style.review}>
        <div className={style.avatarHolder}>
          <img className={style.avatarImage} src={props.review.avatar} alt="Avatar"/>
          <a className={style.avatarUsername}>{props.review.username}</a>
        </div>
        <div className={style.starHolder}>
          <div className={style.stars}>
            <ReactStars className={style.reactStars}
              count={5}
              size={24}
              value={props.review.stars}
              color2={'#ffd700'}
              edit={false}
            />
          </div>
          <div className={style.reviewTitle}>{props.review.title}</div>
        </div>
        <div className={style.reviewData}>
          <a className={style.reviewText}>{props.review.message}</a>
          <a className={style.reviewTime}>Published <TimeAgo date={props.review.createdDate} /></a>
        </div>
      </div>
    )
  
}

export default ReviewEntry;