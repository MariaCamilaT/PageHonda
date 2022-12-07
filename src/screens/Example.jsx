import React from 'react'
import styled from 'styled-components'

//img
import logoFooter from '../img/logoFooter.svg'
import Twitter from '../img/icons/twitter.svg'
import Facebook from '../img/icons/facebook.svg'
import Youtube from '../img/icons/you-tube.svg'
import Instagram from '../img/icons/instagram.webp'

// utils
import { list } from '../utils/ListHonda'

//icons
import { MdArrowDropDown } from "react-icons/md";

const Exam = styled.section`
  width: 100%;
  border-top: 1px solid rgba(0,0,0,.1);
  padding-top: 50px;

  > div:first-child {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      h2 {
      color: #212529;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      margin: 15px 0px;
      font-family: Helvetica, sans-serif;
    }
  
      ul {
        display: flex;
        align-items: center;
        flex-direction: column;
  
        li {
          display: flex;
          color: #808080;
          cursor: pointer;
          font-size: 1.4rem;
          margin-bottom: 15px;
          align-items: center;
          font-family: Helvetica, sans-serif;

            svg {
              width: 21px;
              height: 21px;
            }

            &:hover {
              text-decoration: underline;
            }
        }
      }
    }

    div:nth-child(5) {
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;

      > div {
        height: 100px;
        width: 200px;
        display: inline-block;

          img {
            width: 30px;
            height: 30px;
            margin-right: 20px;
          }
      }
    }

    >div:first-child {
      img {
        width: 190px;
        height: 45.78px;
      }
    }
  }


  > div:nth-child(2) {
    height: 150px;
    width: 100%;

    > div {
      padding: 20px 20px 20px 20px;
      text-align: center;

      p {
        font-size: 1.4rem;
        line-height: 1.69;
        margin-bottom: 10px;
        font-family: sans-serif;
      }

      h2 {
        color: #808080;
        font-size: 1.4rem;
        line-height: 1.69;
        font-family: sans-serif;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (min-width: 565px){
    > div:first-child {
      div {
        width: 200px;
        height: 350px;
      }
    }
  }

  @media screen and (min-width: 991px) {
    padding: 30px 110px 30px 40px;

    > div:first-child {
      
      div {
        display: flex;
        align-items:unset;
        
        h2 {
          text-align: left;
        }

        ul {
          align-items: unset;
        }
      }

      > div:nth-child(1){
        display: flex;
        width: 290px;
        align-items: center;
        justify-content: center;
        
        img {
          width: 190px;
        }
      }
    }
  }
  
`

const Example = () => {
  return (
    <Exam>
      <div>
        <div>
          <img src={logoFooter} alt="" />
        </div>
        <div>
          <h2>Honda Motos</h2>
          <ul>
            {
              list.map((li, index) => {
                return (
                  <li key={index}>{li.text}
                    {index === 2? <MdArrowDropDown/> : ''}
                    {index === 4? <MdArrowDropDown/> : ''}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <h2>Honda te cuenta</h2>
          <ul>
            <li>Noticias y Blog</li>
            <li>Videos</li>
          </ul>
        </div>
        <div>
          <h2>Contacto</h2>
          <ul>
            <li>Bogotá: 745 90 36</li>
            <li>Medellín: 520 28 91</li>
            <li>Cali: 347 22 25</li>
          </ul>
        </div>
        <div>
          <div>
            <h2>Redes Honda</h2>
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Twitter} alt="Twitter" />
            <img src={Youtube} alt="Youtube" />
          </div>
          <div>
            <h2 style={{marginTop:'20px'}}>Honda Dream</h2> 
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>COPYRIGHT 2022 - TODOS LOS DERECHOS RESERVADOS | FANALCA S.A. </p>
          <h2>POLITICA DE PRIVACIDAD Y TEXTOS LEGALES</h2>
        </div>
      </div>
    </Exam>
  )
}

export default Example
