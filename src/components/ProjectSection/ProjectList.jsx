import React from 'react'
import styles from "./styles.module.css"
import gitIcon from "../../assets/git-icon.png"


// O componente ProjectList recebe uma propriedade props, que contém uma lista de projetos. Ele renderiza uma lista não ordenada (ul)
// onde cada item é mapeado a partir da lista de projetos. Cada item da lista é exibido como um elemento li, contendo informações 
// sobre o projeto, como o nome, uma imagem e uma descrição. Além disso, há um link para saber mais sobre o projeto. O componente 
// é responsável por exibir a lista de projetos de forma estruturada e estilizada.

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