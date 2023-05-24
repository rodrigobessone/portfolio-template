import React from 'react'
import WelcomeTextComponent from './WelcomeTextComponent'
import ImageComponent from './ImageComponent'
import styles from './styles.module.css'

function BannerSection() {
  return (
    <section className={styles.bannerSection}>
      <WelcomeTextComponent />
      <ImageComponent />
    </section>
  )
}

export default BannerSection