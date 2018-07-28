import React, { Component } from 'react';
import axios from 'axios';
import style from '../styles/Image.css'
import ImageEntry from './ImageEntry';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }

    axios.get('/api/customer-reviews/imagesItem', {
      params: {
        itemId: props.itemId
      }
    })
    .then((item) => {
      const urls = [];
      item.data.map(imageInfo => {
        urls.push(imageInfo.imageUrl);
      });
      this.setState({
        images: urls.slice(0, 4)
      });
    })
    .catch(error => console.error('error fetching images:', error));
  }

  render() {
    return (
      <div className={style.customerImages}>
        <div className={style.imagesTitle}>Customer images</div>
          <div className={style.imageContainer}>
            {this.state.images.map((image) => (
              <ImageEntry
                image={image}
                key={image}
              />
            ))}
          </div>
        <div>
          <a className={style.imagesLink}>See all customer images</a>
        </div>
      </div>
    );
  }
}

export default Image;