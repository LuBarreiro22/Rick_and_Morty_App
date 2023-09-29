import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.About}>
        <h1>
          Bienvenidos a la Rick and Morty App
        </h1>
        <h4>
         Soy Lucas Barreiro, Desarrollador Web Full Stack, y esta es mi aplicación de Rick And Morty utilizando el stack "PERN", comunicando el front con el back y la DB. Te permite agregar los personajes de esta serie animada e ir acumulándolos mediante su ID, también ampliar la información de un personaje clickeando en su tarjeta, añadir los personajes que mas gusten a la sección de favoritos y aplicarles filtros de ascendente/descendente y por género.
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
          -NodeJS
          <br />
          -Express
          <br />
          -PostgreSQL
          <br />
          -Sequelize
          <br />
          <br />
          <br />
          <br />
          <br />
          Espero que sea de su agrado.
        </h4>
        <h6>Desarrollado por: Lucas Barreiro</h6>
    </div>
  )
}
