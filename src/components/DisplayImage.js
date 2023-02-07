import React from 'react';
import styles from './DisplayImage.module.css';

const DisplayImage = ({ image, title }) => {
  return (
    <div className={styles.displayimage}>
      <h2>{title}</h2>
      <img src={image} alt="" />
    </div>
  )
}

export default DisplayImage