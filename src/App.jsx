import AboutComponent from "./components/AboutSection/AboutComponent"
import BannerSection from "./components/BannerSection/BannerSection"
import MainTemplate from "./components/MainTemplate/MainTemplate"
import ProjectComponent from "./components/ProjectSection/ProjectComponent"
import TechComponent from "./components/TechSection/TechComponent"


// O componente App é o ponto de entrada da aplicação. Ele retorna a estrutura principal da aplicação, que inclui o componente 
// MainTemplate como elemento raiz. Dentro do MainTemplate, são renderizados vários componentes, incluindo BannerSection, 
// AboutComponent, TechComponent e ProjectComponent. Esses componentes compõem a estrutura básica da página, onde são exibidos
// o banner, informações sobre o autor, tecnologias utilizadas e projetos.

function App() {
  return (
    <>
      <MainTemplate>
        <BannerSection />
        <AboutComponent/>
        <TechComponent />

    <ProjectComponent/>
      </MainTemplate>
    </>
  )
}

export default App
