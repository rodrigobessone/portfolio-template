import styles from "./styles.module.css"
import React from 'react'

function ButtonComponent({ props, classe }) {
    return (
        <button className={styles[classe]}>{props}</button>

    )
}

export default ButtonComponent