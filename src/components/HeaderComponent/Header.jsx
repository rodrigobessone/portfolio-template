import NavComponent from "../NavComponent/Navigation"
import styles from "./styles.module.css"
import React from 'react'
import ImgLogo from '../../assets/portfolio.png'
import ButtonComponent from "../ButtonComponent/Button"

function HeaderComponent() {
  const menu = ["Sobre", "Slack", "Projetos"]
  return (
    <header className={styles.headerContainer}>

      <img src={ImgLogo} alt="logo" />
      <NavComponent props={menu} />
      <ButtonComponent props={"Contato"} classe={"buttonHeader"} />

    </header>
  )
}

export default HeaderComponent