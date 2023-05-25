import HeaderComponent from "../HeaderComponent/Header"
import Footer from "../Footer/Footer"

// O código define o componente MainTemplate, que é um template básico para a estrutura da página. O componente possui uma 
// propriedade children, que permite que outros componentes ou elementos sejam inseridos dentro dele. O componente retorna 
// uma estrutura com o HeaderComponent no topo, seguido pelo conteúdo principal (children) dentro de uma tag main e, 
// por fim, o Footer no final. Essa estrutura básica é usada para envolver o conteúdo da página e garantir a consistência 
// visual em toda a aplicação.


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