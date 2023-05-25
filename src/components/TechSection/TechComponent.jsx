import React from 'react'
import { technologies } from '../../data/technologies'
import TechList from './TechList'
import styles from "./styles.module.css"

// O componente TechComponent é responsável por renderizar uma seção de tecnologias. Ele exibe um título "Tecnologias" e utiliza
// o componente TechList para exibir a lista de tecnologias. O componente é utilizado para agrupar e estruturar visualmente as
// informações sobre as tecnologias utilizadas.

function TechComponent() {

  return (
    <div className={styles.divTech}>
      <h2 className={styles.titleText}>Tecnologias</h2>
      <TechList props={technologies} />
    </div>
  )
}

export default TechComponent