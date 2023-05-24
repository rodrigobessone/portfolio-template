import React from 'react'
import styles from "./styles.module.css"

function AboutComponent() {
    return (
        <div className={styles.aboutDiv}>
            <h2 className={styles.aboutTitle}>Sobre mim</h2>
            <p className={styles.aboutText}>Possuo grande disposição para o aprendizado e a aplicação de conhecimentos e habilidades interpessoais
                no âmbito profissional, estou sempre estudando por meio de cursos online, livros e fóruns voltados para a área,
                buscando me aprofundar cada vez mais. Me considero uma pessoa calma e analítica, com ótimas habilidades em resolução
                de problemas, buscando soluções em vez de obstáculos.</p>
        </div>
    )
}

export default AboutComponent