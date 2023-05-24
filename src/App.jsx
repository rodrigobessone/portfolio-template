import AboutComponent from "./components/AboutSection/AboutComponent"
import BannerSection from "./components/BannerSection/BannerSection"
import MainTemplate from "./components/MainTemplate/MainTemplate"
import ProjectComponent from "./components/ProjectSection/ProjectComponent"
import TechComponent from "./components/TechSection/TechComponent"

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
