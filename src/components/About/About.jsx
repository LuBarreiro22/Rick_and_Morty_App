import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.About}>
        <h1>
          Bienvenidos a la Rick and Morty App
        </h1>
        <h4>
          Soy Lucas Barreiro, Desarrollador Web Full Stack en proceso, y este es mi primer proyecto en React creando una aplicación tipo SPA(Single Page Application) consumiendo datos desde la API de Rick and Morty, la cual te permite agregar los personajes de esta serie animada e ir acumulándolos mediante su ID.También te permite ampliar la información de un personaje clickeando en su tarjeta.
          <br />
          <br />
          Tecnologías utilizadas:
          <br />
          -JavaScript
          <br />
          -HTML
          <br />
          -CSS
          <br />
          -React
          <br />
          -Redux
          <br />
          <br />
          <br />
          <br />
          <br />
          Espero que sea de su agrado.
        </h4>
        <h6>Developed by: Lucas Barreiro</h6>
    </div>
  )
}
