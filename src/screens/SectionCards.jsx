import React from 'react'
import styled from 'styled-components'

//utils
import { Cards } from '../utils/Cards'

const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 0px 5px;
  text-align: center;

  > div {
    h1 {
      font-size: 2rem;
      color: #212529;
      font-weight: bold;
      margin-bottom: 30px;
      font-family: Helvetica, sans-serif;
    }
  }

  article {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

      div {
        width: 100%;
        margin: 10px;
        height: 100%;
        overflow: hidden;
        max-width: 550px;
        max-height: 550px;
        position: relative;
        text-align: center;
        border-radius: 6px;
        padding-bottom: 10px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
          }

          > div {
            bottom: -230px;
            position: absolute;

            h1 {
              color: #F8F8F8;
              font-size: 1.6rem;
              margin-bottom: 15px;
              font-family: Helvetica, sans-serif;
            }

            a {
              width: 200px;
              color:#CC0000;
              font-size: 1.2rem;
              font-weight: bold;
              text-decoration: none;
              font-family: Helvetica, sans-serif;
            }
          }
      }
    }

    @media screen and (max-width: 480px) {
      >div {
        h1 {
          width: 300px;
          text-align: left;
          padding-left: 140px;
        }
      }
    }

    @media screen and (min-width: 480px) {
      > div {
        h1 {
          font-size: 2.8rem;
        }
      }
    }
    
    @media screen and (min-width: 768px) {
      article {
        margin-top: 80px; 
        div { 
          > div {
            bottom: -486px;

              h1 {
                font-size: 2rem;
              }

              a {
                font-size: 1.6rem;
              }
          }
        }
      }
    }

    @media screen and (max-width: 1100px){
      article {
        > div {
          width: 350px;

            > div {
              bottom: -240px;
            }
        } 
      }
    }
`

const SectionCards = () => {
  return (
      <Section>
          <div>
            <h1>Motos Honda Categorias</h1>
          </div>
          <article>
            {
              Cards.map((card, index) => {
                return(
                  <div key={index}>
                    <img src={card.img} alt="**" />
                    <div>
                      <h1>{card.title}</h1>
                      <a href="*">Ver motos {card.title} {'>'} </a>
                    </div>
                  </div>
                )
              })
            }
            <div></div>
          </article>
      </Section>
  )
}

export default SectionCards
