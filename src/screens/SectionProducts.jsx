import React from 'react'
import styled from 'styled-components'

//img
import imgscooter from '../img/imgscooter.jpg'

const Section = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  max-height: 630px;
  position: relative;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-image: url(${imgscooter});


    div {
      width: 200px;
      height: 400px;
      display: flex;
      padding-top: 10px;
      position: relative;
      align-items: center;
      flex-direction: column;
      max-height: 630px !important;

      h1 {
        font-size: 2rem;
        color: #212529;
        font-weight: bold;
        font-family: Helvetica, sans-serif;
      }

      p {
        color: #212529;
        margin-top: 20px;
        font-size: 1.4rem;
        font-family:sans-serif ;
      }

      a {
        height: 29px;
        width: 218px;
        bottom: 130px;
        display: flex;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 4px;
        position: absolute;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        background-color:#CC0000;
        font-family: Helvetica, sans-serif;
      }
    }

  @media screen and (min-width: 320px){
    height: 288px;
  }

  @media screen and (min-width: 768px) {
    height: 453px;

    div {
      left: 50px;
      height: 250px;
      margin-top: 80px;
      position: absolute;

        a {
          height: 33px;
          bottom: 100px;
        }

        h1 {
          font-size: 2.8rem;
        }
    }
  }

  @media screen and (min-width: 1000px) {
    height: 630px;

    div {
      left: 120px;
      height: 250px;
      margin-top: 120px;
      position: absolute;

        a {
          height: 33px;
          bottom: 100px;
          font-size: 1.6rem;
        }

        h1 {
          font-size: 2.8rem;
        }
    }
  }
`

const SectionProducts = () => {
  return (
    <Section>
      <div>
        <h1>PCX 150 2023</h1>
        <p>Experiencia superior</p>
        <a href="*">VER PCX 150 2023</a>
      </div>
    </Section>
  )
}

export default SectionProducts
