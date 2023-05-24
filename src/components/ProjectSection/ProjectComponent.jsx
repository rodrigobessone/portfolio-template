import React from 'react'
import { projects } from '../../data/projects'
import ProjectList from './ProjectList'
import styles from './styles.module.css'
function ProjectComponent() {

  return (
    <div className="divProject">
      <h2 className={styles.titleText}>Projetos</h2>
      <ProjectList props={projects} />
    </div>
  )
}

export default ProjectComponent