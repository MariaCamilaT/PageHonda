import React, {useState} from 'react'
import styled from 'styled-components'

//utils
import {  News } from '../utils/CardNews'

const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 20px;
  margin-bottom: 60px;

    h1 {
      height: 120px;
      color: #212529;
      font-weight: bold;
      font-size: 1.6rem;
      padding-top: 40px;
      font-family: Helvetica, sans-serif;
    }

    article {
      height: auto;
      width: 100%;
      display: flex;
      padding-left:-300px ;
      overflow: hidden;
      
      > div {
        width: 204px;
        height: 700px;
        margin-right: 20px;
        
        div:first-child{
          width: 204px;
          height: 204px;
          overflow: hidden;
          border-radius: 5px;

            img {
              width: 100%;
              height: 100%;
            }
        }

        .card__small {
            height: 130px !important;
          }
        }

        div:nth-child(2){
          height: 100px;

          h2 {
            color: #808080;
            margin-top: 10px;
            line-height: 1.69;
            font-size: 1.4rem;
            font-family: sans-serif;
          }
          
          > p {
            color: #2A2A2A;
            font-weight: bold;
            line-height: 1.3;
            font-size: 1.6rem;
            font-family:  Helvetica, sans-serif;
          }
        }

        div:nth-child(3) {
          height: 210px;
          
          > p {
            text-align: left;
            color: #2A2A2A;
            font-size: 1.4rem;
            line-height: 1.69;
            margin-top: 35px;
            font-family: 'Open Sans';
          }
        }

        div:nth-child(4) {

          a {
            color: #CC0000;
            font-size: 1.4rem;
            text-decoration: none;
            font-family: 'Open Sans';
          }
        }
      }

  @media screen and (min-width: 918px) {
    article {
      width: 100%;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1300px){
    h1 {
      margin-left: 100px;
    }

    article {
      width: 100%;
      justify-content: center;

        > div {
          width: 254px;
          margin-right: 20px;
          
          > div:nth-child(1) {
            width: 254px;
            height: 130px;
          }

          > div:nth-child(2) {
            p {
              text-align: left;
              font-size: 2rem;
            }
          }

          > div:nth-child(3) {
            p {
              width: 100%;
            }
          }

          > div:nth-child(4) {
            text-align: left;
          }
        }
    }
  }

      //transparente 
    > div:nth-child(3) {
      width: 100%;
      height: 20px;
      display: flex;
      margin-top: -70px;
      align-items: center;
      justify-content: center;
      
        button {
          width: 10px;
          height: 10px;
          border: none;
          margin-right: 10px;
          border-radius: 30px;
          background-color: #D6D6D6 ;
        }
    }

    @media screen and (min-width: 1300px) {
      > div:nth-child(3) {
        visibility: collapse;
      }

      > div:nth-child(4) {
        a {
          margin-top: -100px;
        }
      }
    }

    > div:nth-child(4) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

        a {
          width: 100%;
          height: 41px;
          display: flex;
          max-width: 300px;
          color: #CC0000;
          font-weight: bold;
          font-size: 1.6rem;
          text-align: center;
          border-radius: 5px; 
          align-items: center;
          white-space: inherit;
          text-decoration: none;
          justify-content: center;
          border: 1px solid #CC0000;
          font-family: Helvetica, sans-serif;

            &:hover {
              color: white;
              transition-duration: 1s;
              background-color: #CC0000;
            }
        }
    }

    @media screen and (min-width: 480px) {
      h1 {
        font-size: 2rem;
      }

      > div:nth-child(4) {
        a {
          font-weight: normal;
        }
      }
    }

    @media screen and (min-width: 491px) and (max-width: 599px){
      article {
        position: relative;
        /* right: ${({clickTwo}) => (clickTwo)}; */

        > div {
          width: 400px;
          margin-left: 30px;
        
            div:first-child{
              width: 400px;
            }
        }
      }  
    }

    @media screen and (max-width: 1300px) {
      a {
          margin-top: 50px;
      }
    }
`

const SectionNews = () => {

  const [clickTwo, setclickTwo] = useState(0);

  const onClickTwo = () => {
    setclickTwo(clickTwo + 449)
  }

  console.log(clickTwo);

  return (
    <Section>
      <h1>Honda te cuenta</h1>
      <article clickTwo={clickTwo}>
        {
          News.map((item, index) => {
            return (
              <div key={index}>
                <div className={index === 1 ? 'card__small':''}>
                  <img src={item.img} alt=""/>
                </div>
                <div>
                  <h2>{item.date}</h2>
                  <p>{item.title}</p>
                </div>
                <div>
                  <p>{item.paragraph}</p>
                </div>
                <div>
                  <a href="*">Seguir leyendo {'>'}</a>
                </div>
              </div>
            )
          })
        }
      </article>
      <div>
        <button></button>
        <button onClick={onClickTwo}></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <a href="*">Ver todas las noticias Honda te cuenta </a>
      </div>
    </Section>
  )
}

export default SectionNews
