import React from 'react'
import styled from 'styled-components'

//img
import imgRed from '../img/imgReds.webp'

const Section = styled.section`
  width: 100%;
  height: 400px;
  
  article {
    width: 100%;
    height: auto;
    display: flex;
    padding-top: 60px;
    flex-direction: column;
    justify-content: center;

    div:first-child {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

        h1 {
          color: #212529;
          font-weight: bold;
          margin-bottom: 20px;
          font-family: Helvetica, sans-serif;
        }

        p {
          width: 100%;
          color: #808080;
          text-align: center;
          font-family: Helvetica, sans-serif;
        }

        a {
          margin-top: 15px;
          color: #CC0000;
          font-size: 1.6rem;
          font-weight: bold;
          text-decoration: none;
          font-family: Helvetica, sans-serif;
        }
    }
  
    div:nth-child(2){
      margin-top: 30px;

      img {
        width: 100%;
        height: 100%;
        max-width: 900px;
      }
    }
  }

  @media screen and (max-width: 479px){
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 480px) {
    h1 {
      font-size: 2.8rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media screen  and (min-width: 320px ) and (max-width: 1075px){
    div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1085px) {
    article {
      display: flex;
      flex-direction: row-reverse;

      div:first-child {
        flex: 1;
        margin-left: -600px;

          p {
            width: 360px;
            font-size: 2rem;
            line-height: 1.1;
          }
      }

      div:nth-child(2) {
        flex: 1.8;
      }
    }
  }
`

const SectionRed = () => {
  return (
    <Section>
      <article>
        <div>
          <h1>Categoria SPORT</h1>
          <p>Motos sport. Todas nuestras motos Honda las encuentras
            en un solo lugar con la tecnología y diseño del fabricante
            número 1 de motos en el mundo.</p>
          <a href="*">Ir a categoría SPORT {'>'} </a>
        </div>
        <div>
          <img src={imgRed} alt="scooter" />
        </div>
      </article>
    </Section>
  )
}

export default SectionRed
