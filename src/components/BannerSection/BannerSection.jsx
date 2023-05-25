import React from 'react'
import WelcomeTextComponent from './WelcomeTextComponent'
import ImageComponent from './ImageComponent'
import styles from './styles.module.css'


// Esse código define um componente funcional chamado BannerSection que representa uma seção de banner em uma página. O componente
// retorna um elemento section com a classe CSS definida em styles.bannerSection.Dentro dessa seção, são renderizados outros
// componentes: WelcomeTextComponent e ImageComponent, que provavelmente são responsáveis por exibir o texto de boas - vindas e uma
// imagem, respectivamente.Esses componentes podem ser importados de outros arquivos.

function BannerSection() {
  return (
    <section className={styles.bannerSection}>
      <WelcomeTextComponent />
      <ImageComponent />
    </section>
  )
}

export default BannerSection