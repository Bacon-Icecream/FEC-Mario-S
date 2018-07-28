import React, { Component } from 'react';

import style from '../styles/App.css'

class Search extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={style.search}>
        <div className={style.searchTitle}>Search customer reviews</div>
        <form>
          <input className={style.searchReviews} type="text" name="search"/>
          <button className={style.searchButton} type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;