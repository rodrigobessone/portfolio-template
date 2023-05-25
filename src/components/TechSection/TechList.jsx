import React from 'react'
import styles from "./styles.module.css"

// O componente TechList recebe uma prop chamada props que contém uma lista de tecnologias. Ele renderiza uma lista não ordenada (ul)
// com cada tecnologia representada por um item de lista (li). Cada item contém uma imagem representando o ícone da tecnologia e um 
// nome correspondente. O componente percorre a lista de tecnologias usando map e gera dinamicamente os itens da lista com base nos 
// dados fornecidos.

function TechList({ props }) {
    return (
        <ul className={styles.techList}>
            {
                props.map((item, index) => {
                    return (
                        <li key={index} className={styles.techItem}>
                            <img src={item.img} alt={"icon" + item.name} />
                            <span className={styles.techName}>{item.name}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TechList