import React from 'react'
import styles from "./styles.module.css"
import { user } from '../../data/user'
import whatsAppIcon from '../../assets/whatsapp-icon.png'
import linkdinIcon from '../../assets/linkedin-icon.png'
import githubIcon from '../../assets/github-icon.png'

// O código define o componente Footer, que representa o rodapé da página.O componente retorna um elemento footer com uma classe
// CSS específica.Dentro desse footer, existem duas divs: uma para informações de contato e outra para os direitos autorais. 
// A primeira div contém um título "Contato" e um conjunto de ícones para WhatsApp, LinkedIn e GitHub.A segunda div exibe um 
// texto de direitos autorais com o nome do usuário.

function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.divContact}>
          <h2 className={styles.textContact}>Contato</h2>
          <div className={styles.divIcons}>
            <img src={whatsAppIcon} alt="whatsapp" />
            <img src={linkdinIcon} alt="linkedin" />
            <img src={githubIcon} alt="github" />
          </div>
        </div>
        <div className={styles.divRights}>
          <p className={styles.textRight}>Todos os direitos reservados - <span>{user}</span></p>
        </div>
      </footer>
    )
  }

export default Footer