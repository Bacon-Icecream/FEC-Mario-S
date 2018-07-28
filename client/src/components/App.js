import React, { Component } from 'react';
import axios from 'axios';
import style from '../styles/App.css';
import Image from './Image';
import Review from './Review';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: '5b56129c6c1182305c88898f'
    }

    axios.get('/api/customer-reviews/items', {
      params: {
        itemId: this.state.itemId
      }
    })
    .then((item) => {
      console.log(item.data);
    })
    .catch(error => console.error('error fetching item:', error));
  }

  render() {
    return (
      <div>
        <hr/>
          <div className={style.gridContainer}>
            <div className={style.totalizer}>
              <div className={style.customerReviews}>Customer reviews</div>
              <div className={style.topCostumer}>Top customer reviews</div>
            </div>
            <div className={style.mostRecent}>
              <Image />
              <Review />
              <Search />
            </div>
          </div>
        <hr/>
      </div>
    );
  }
}

export default App;