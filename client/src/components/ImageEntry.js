import React from 'react';
import style from '../styles/ImageEntry.css'

function ImageEntry(props) {

    return (
      <div className={style.imageContainer}>
        <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
        <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
        <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
        <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
      </div>
    )
  
}

export default ImageEntry;