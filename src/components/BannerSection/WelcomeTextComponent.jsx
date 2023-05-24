import { username } from "../../data/user"
import ButtonComponent from "../ButtonComponent/Button"
import styles from "./styles.module.css"


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