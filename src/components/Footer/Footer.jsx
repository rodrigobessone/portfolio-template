import React from 'react'
import styles from "./styles.module.css"
import { user } from '../../data/user'
import whatsAppIcon from '../../assets/whatsapp-icon.png'
import linkdinIcon from '../../assets/linkedin-icon.png'
import githubIcon from '../../assets/github-icon.png'

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