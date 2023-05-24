import React from 'react'
import styles from "./styles.module.css"

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