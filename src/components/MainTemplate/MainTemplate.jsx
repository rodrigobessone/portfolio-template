import HeaderComponent from "../HeaderComponent/Header"
import Footer from "../Footer/Footer"
import BannerSection from "../BannerSection/BannerSection"
import TechComponent from "../TechSection/TechComponent"
import styles from "./styles.module.css"
import ProjectComponent from "../ProjectSection/ProjectComponent"
import AboutComponent from "../AboutSection/AboutComponent"


function MainTemplate({ children }) {
    return (
        <>
            <HeaderComponent />
            <main>
                {children}
            </main>
            <Footer />
        </>

    )
}

export default MainTemplate