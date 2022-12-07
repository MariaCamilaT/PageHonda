import React from 'react'
import styled from 'styled-components'

import { MdOutlineArrowForwardIos } from "react-icons/md";

const Slider = styled.section`
  width: 100%;
  height: auto;
  min-height: 65px;

    div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 5px 0px;
      align-items: center;
      background-color: #EAEAEA;
      justify-content: space-evenly;

        >div {
          max-width: 400px;
        }

        > div:first-child {
          overflow: hidden;

          img {
            width: 45px;
            height: 45px;
          }

          > p {
            font-size: 1.4rem;
            font-weight: bold;
            font-family:  Helvetica, sans-serif;
          }
        }

        > div:nth-child(2) {
          width: 100%;
          display: flex;

          h1 {
            display: block;
            font-size: 1.4rem;
            font-weight: bold;
            font-family:  Helvetica, sans-serif;
          }

          h2 {
            display: block;
            color: #808080;
            font-size: 1.4rem;
            font-family: sans-serif;
          }
    }

        > div:nth-child(3) {
          a {
            display: flex;
            color:#CC0000;
            font-size: 1.6rem;
            align-items: center;
            text-decoration: none;
            font-family: Helvetica, sans-serif;

              &:hover {
                text-decoration: underline;
              }

              svg {
                font-size: 3rem;
              }
          }
        }
    }

    @media screen and (max-width: 768px) {
      height: 65px;

      > div:first-child {
        flex-wrap: nowrap;

        p {
          display: none;
        }
      }
    }
`

const ContainerSlider = () => {
  return (
    <Slider>
      <div>
        <div>
          <img src="https://a5i4f6g5.stackpathcdn.com/images/svg/alert.svg" alt="icon"/>
          <p>Campanas de Seguridad</p>
        </div>
        <div>
          <div>
            <div>
              <h1>CBR500_CB500</h1>
            </div>
            <div>
              <h2>Honda X-ADV 750 modelo 2021</h2> 
            </div>
          </div>
        </div>
        <div>
          <a href="*">Ver mas <MdOutlineArrowForwardIos/></a>
        </div>
      </div>
    </Slider>
  )
}

export default ContainerSlider
