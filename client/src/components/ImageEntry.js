import React from 'react';
import style from '../styles/ImageEntry.css'

function ImageEntry(props) {

    return (
      <div className={style.imageBox}>
        <img className={style.imageDisplay} src={props.image} alt="Avatar"/>
      </div>
    )
  
}

export default ImageEntry;