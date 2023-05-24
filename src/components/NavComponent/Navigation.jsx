
import React from 'react'
import styles from "./styles.module.css"

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