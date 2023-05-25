import NavComponent from "../NavComponent/Navigation"
import styles from "./styles.module.css"
import React from 'react'
import ImgLogo from '../../assets/portfolio.png'
import ButtonComponent from "../ButtonComponent/Button"

// O código define o componente HeaderComponent, que representa o cabeçalho da página. O componente retorna um elemento header
// com uma classe CSS específica. Dentro desse header, há uma imagem de logo, um componente de navegação (NavComponent) com 
// base em um array de itens de menu e um botão de contato (ButtonComponent). A imagem, o componente de navegação e o botão 
// são renderizados dentro do cabeçalho.

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