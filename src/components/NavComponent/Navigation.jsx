
import React from 'react'
import styles from "./styles.module.css"

// O componente NavComponent recebe uma propriedade chamada props que contém um array de itens. Ele retorna uma lista não
// ordenada (ul) com base nos itens fornecidos. Cada item é mapeado e renderizado como um elemento de lista (li). O atributo
// key é usado para identificar exclusivamente cada item da lista. O componente ajuda a criar uma navegação simples e 
// dinâmica com base nos itens fornecidos.

function NavComponent({ props }) {

    return (
        <>
            <ul className={styles.listNav}>
                {
                    props.map((item, index) => {
                        return (
                            <li key={index} id={"list-" + item}>{item}</li>
                        )
                    }
                    )
                }
            </ul>
        </>
    )
}

export default NavComponent