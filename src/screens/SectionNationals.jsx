import React from 'react'
import styled from 'styled-components'

//components
import Button from '../components/Button'

//img
import imgBogota from '../img/Concesionarios.webp'

const Section = styled.section`
  width: 100%;
  height: 430px;
  display: flex;
  margin-top: 500px;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-image: url(${imgBogota});

  div {
    width: 100%;
    display: flex;
    padding: 20px;
    justify-content: left;
    flex-direction: column;

    h1 {
      color: #2A2A2A;
      font-size: 2.8rem;
      font-weight: bold;
      margin-bottom: 20px;
      font-family: Helvetica, sans-serif;
    }
    
    p {
      color: #2A2A2A;
      font-size: 1.4rem;
      line-height: 1.69;
      font-family: Helvetica, sans-serif;
    }

    button {
      width: 225px;
      height: 42px;
      color: #CC0000;
      font-size: 1.3rem;
      font-weight: normal;
      border: 1px solid #CC0000;

      &:hover {
        color: white;
        transition-duration: 1s;
        background-color: #CC0000 ;
      }
    }
  }

  @media screen and (max-width: 449px) {
    div {
      margin-bottom: 110px;

        button {
          width: 256px;
          height: 31px;
        }

        h1 {
          font-size: 2.8rem;
          line-height: 35px;
          margin-bottom: -2px;
        }
    }
  }
  
  @media screen and (min-width: 450px){
    div {
      align-items: center;
      margin-bottom: 125px;

      button {
        width: 225px;
        height: 42px;
      }

      p {
        margin-top: 3px;
        text-align: center;
        margin-bottom: 3px;
      }
    }
  }


  @media screen and (min-width: 769px) {
    div {
      width: 500px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media screen and (min-width: 991px) {
    margin-top: 0;
  }

`

const SectionNationals = () => {
  return (
    <Section>
      <div>
        <h1>Concesionarios Motos Honda</h1>
        <p>Conoce nuestra red de concesionarios a nivel nacional y disfruta todos los beneficios 
          que tenemos para ti: taller, seguros, ventas, repuestos, financiación y simulador</p>
        <Button text='Encontrar concesionario'/>
      </div>
    </Section>
  )
}

export default SectionNationals
