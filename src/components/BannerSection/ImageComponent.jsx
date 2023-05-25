import styles from "./styles.module.css"
import image from '../../assets/banner-img.png'
import React from 'react'

// Esse código define um componente funcional chamado ImageComponent que é responsável por renderizar uma imagem em um banner. 
// O componente retorna um elemento <img> que exibe a imagem. A classe CSS styles.imageBanner é aplicada ao elemento <img> 
// para estilizá-lo de acordo com as definições de estilo. A propriedade src define o caminho da imagem a ser exibida, 
// e a propriedade alt especifica um texto alternativo para a imagem, que é exibido caso a imagem não seja carregada corretamente.

function ImageComponent() {
  return (
    <>
      <img className={styles.imageBanner} src={image} alt="banner-image" />
    </>
  )
}

export default ImageComponent


