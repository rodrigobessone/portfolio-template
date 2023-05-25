import styles from "./styles.module.css"
import React from 'react'

// O código define o componente funcional ButtonComponent, que renderiza um botão com base nas propriedades props (texto do botão) 
// e classe (classe CSS). O componente retorna um elemento button com a classe CSS especificada e exibe o texto fornecido.

function ButtonComponent({ props, classe }) {
    return (
        <button className={styles[classe]}>{props}</button>

    )
}

export default ButtonComponent