import React, { Component } from 'react';
import style from '../styles/App.css'

class Image extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={style.customerImages}>
        <div className={style.imagesTitle}>Customer images</div>
        <div className={style.imageContainer}>
          <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
          <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
          <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
          <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
        </div>
        <div>
          <a className={style.imagesLink}>See all customer images</a>
        </div>
      </div>
    );
  }
}

export default Image;