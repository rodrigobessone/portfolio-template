import styles from "./styles.module.css"
import image from '../../assets/banner-img.png'
import React from 'react'

function ImageComponent() {
  return (
    <>
      <img className={styles.imageBanner} src={image} alt="banner-image" />
    </>
  )
}

export default ImageComponent


