import React from 'react';
import styles from './loader.module.scss';

export const Loader = () => {
  return (
        <span 
            className={`${styles.loader} spinner-grow text-success`} 
            role="status" 
            aria-hidden="true"
        >
            <span className={`${styles.text}`}>Sending Information</span>
        </span>


  )
}
