import React from 'react'
import { technologies } from '../../data/technologies'
import TechList from './TechList'
import styles from "./styles.module.css"

function TechComponent() {

  return (
    <div className={styles.divTech}>
      <h2 className={styles.titleText}>Tecnologias</h2>
      <TechList props={technologies} />
    </div>
  )
}

export default TechComponent