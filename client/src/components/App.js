import React, { Component } from 'react';
import style from '../styles/App.css';
import Image from './Image';
import Review from './Review';
import Search from './Search';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      itemId: '',
      images: [],
      reviews: []
    }
  }
  
  componentDidMount() {
    // Getting the first item id
    axios.get('/api/customer-reviews/firstItem', {
    })
    .then((item) => {
      this.setState({
        itemId: item.data._id
      });

      // Getting the images for that item id
      axios.get('/api/customer-reviews/imagesItem', {
        params: {
          itemId: this.state.itemId
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
      .catch(error => console.error('error fetching images from item id:', error));

      // Getting the reviews for that item id
      axios.get('/api/customer-reviews/reviewsItem', {
        params: {
          itemId: this.state.itemId
        }
      })
      .then((item) => {
        this.setState({
          reviews: item.data.slice(0, 10)
        });
      })
      .catch(error => console.error('error fetching reviews from item id:', error));
    })
    .catch(error => console.error('error fetching first item:', error));
  }

  render() {
    return (
      <div>
        <hr className={style.line}/>
          <div className={style.gridContainer}>
            <div className={style.totalizer}>
              <div className={style.customerReviews}>Customer reviews</div>
              <div className={style.topCostumer}>Top customer reviews</div>
            </div>
            <div className={style.mostRecent}>
              <Image images={this.state.images}/>
              <Review reviews={this.state.reviews}/>
              <Search />
            </div>
          </div>
        <hr className={style.line}/>
      </div>
    );
  }
}

export default App;