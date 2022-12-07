import React from 'react'
import styled from 'styled-components'

//components
import Button from '../components/Button'

//img
import imgModel from '../img/imgModel.jpg'
import imgMen from '../img/Financiacion.webp'

const Section = styled.section`
  width: 100%;
  height: 500px;
  margin-top: 70px;
  background-color: #2A2A2A;

    article {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        filter: brightness(0.6);
      }

      > div {
        display: flex;
        margin: 20px;
        bottom: 150px;
        position: absolute;
        flex-direction: column;
        justify-content: center;

        h2 {
          color: #949494;
          font-size: 1.7rem;
          font-weight: bold;
          margin-bottom: 20px;
          font-family: Helvetica, sans-serif;
        }

        p {
          color: white;
          text-align: left;
          line-height: 22px;
          font-size: 1.4rem;
          margin-bottom: 20px;
          font-family: 'Open Sans';
        }
      }
    }

    article:first-child {
      width: 100%;
      height: 100%;
      background-size: cover;
    }

    article:nth-child(2) {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }

    @media screen and (min-width: 1025px){
      display: flex;
      height: 600px;
      padding: 0px 30px;

        article {
          > div {
            width: 450px;
            margin-left: 100px;
            margin-bottom: 50px;

              h2 {
                font-size: 2rem;
              }

              p {
                margin-bottom: 40px;
              }

              button {
                width: 231px;
                height: 39px;
              }
          }
        }
    }

    @media screen and (min-width: 991px) and (max-width: 1023px) {
      display: flex;

      article {
        flex: 1;
          div {
            width: 400px;
            bottom: 100px;
            margin-left: 100px;

            h2 {
              font-size: 2rem;
            }
          }
      }
    }
`

const SectionPicture = () => {
  return (
    <Section>
      <article>
        <img src={imgMen} alt="" />
        <div>
          <h2>Financia tu Moto Honda</h2>
          <p>Estamos para ofrecerte todo el apoyo que necesitas 
            para obtener tu nueva motocicleta Honda, 
            conduce seguro y tranquilo tu moto Honda y 
            resuelve aquí tus dudas sobre todos nuestros planes
            de financiación y seguros.</p>
          <Button text='Financia tu moto'/>
        </div>
      </article>
      <article>
        <img src={imgModel} alt="" />
        <div>
          <h2>Honda te cuenta</h2>
          <p>Encuentra noticias Honda de tu interés, 
            eventos y contenido especial de motos sólo para ti</p>
          <Button text='Honda te cuenta'/>
        </div>
      </article>
    </Section>
  )
}

export default SectionPicture
