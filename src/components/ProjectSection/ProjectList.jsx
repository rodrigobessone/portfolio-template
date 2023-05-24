import React from 'react'
import styles from "./styles.module.css"
import gitIcon from "../../assets/git-icon.png"

function ProjectList({ props }) {
    return (
        <ul className={styles.projectList}>
            {
                props.map((item, index) => {
                    return (
                        <li key={index} className={styles.projectItem}>
                            <div className={styles.divInfoProject}>
                                <span className={styles.projectName}>{item.name}</span>
                                <img src={gitIcon} alt="github" />
                            </div>
                            <div className={styles.divContent}>
                                <p className={styles.textProject}>{item.description}</p>
                                <a className={styles.moreText}>Saiba mais</a>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ProjectList