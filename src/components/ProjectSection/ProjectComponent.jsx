import React from 'react'
import { projects } from '../../data/projects'
import ProjectList from './ProjectList'
import styles from './styles.module.css'

// O componente ProjectComponent retorna uma div com o título "Projetos" e renderiza a lista de projetos usando o componente
// ProjectList, passando a propriedade projects. É responsável por exibir e agrupar os projetos em um layout específico.

function ProjectComponent() {

  return (
    <div className="divProject">
      <h2 className={styles.titleText}>Projetos</h2>
      <ProjectList props={projects} />
    </div>
  )
}

export default ProjectComponent