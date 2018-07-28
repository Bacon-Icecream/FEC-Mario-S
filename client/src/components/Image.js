import React, { Component } from 'react';
import style from '../styles/Image.css'
import ImageEntry from './ImageEntry';

class Image extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={style.customerImages}>
        <div className={style.imagesTitle}>Customer images</div>
          <ImageEntry />
        <div>
          <a className={style.imagesLink}>See all customer images</a>
        </div>
      </div>
    );
  }
}

export default Image;