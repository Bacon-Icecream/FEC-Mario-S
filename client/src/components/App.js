import React, { Component } from 'react';
import style from '../styles/App.css';
import Image from './Image';
import Review from './Review';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: '5b5ce1ff7236c92ec094e98d'
    }
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
              <Image itemId={this.state.itemId}/>
              <Review itemId={this.state.itemId}/>
              <Search />
            </div>
          </div>
        <hr/>
      </div>
    );
  }
}

export default App;