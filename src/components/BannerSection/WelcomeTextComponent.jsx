import { username } from "../../data/user"
import ButtonComponent from "../ButtonComponent/Button"
import styles from "./styles.module.css"


// O código define o componente funcional WelcomeTextComponent, responsável por renderizar uma seção de boas-vindas em um banner. 
// O componente retorna um elemento div com uma classe CSS específica. Dentro dessa div, são exibidos um nome de usuário, um título
// de boas-vindas e uma mensagem de determinação. Além disso, o componente inclui um componente ButtonComponent com uma propriedade
// de texto e uma classe CSS específicas.

function WelcomeTextComponent() {
    return (
        <div className={styles.divBanner}>
            <span className={styles.spanBanner}>{username}</span>
            <h1 className={styles.titleBanner}>Bem-vindo ao meu portfólio</h1>
            <p className={styles.textBanner}>Com determinação implacável e foco inabalável.</p>
            <ButtonComponent props={"Saiba mais"} classe={"buttonBanner"} />
        </div>
    )
}

export default WelcomeTextComponent