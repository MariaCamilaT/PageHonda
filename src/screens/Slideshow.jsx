import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'


//librery
import Carousel from 'nuka-carousel';

//img
import imgOne from '../img/imgOne.png'
import imgTwo from '../img/imgTwo.jpg'
import imgFour from '../img/imgFour.jpg'
import imgFive from '../img/imgFive.jpg'
import imgThree from '../img/imgThree.jpg'
import mqOne from '../img/mquery/movilone.webp'
import mqTwo from '../img/mquery/moviltwo.webp'
import mqFour from '../img/mquery/movilfour.webp'
import mqFive from '../img/mquery/movilfive.webp'
import mqThree from '../img/mquery/movilthree.webp'

const Slides = styled.div`
  width: 100%;
  height: auto;
  margin-top: -30px;

    img {
      width: 100%;
    }

  @media screen and (max-width: 320px){
    height: 360px;

      img {
        height: 340px;
        margin-top: 20px;
      }
  }

  @media screen and (min-width: 321px) and (max-width: 1020px){
    margin-top: 20px;
  }

`

const Slideshow = () => {
  return (
    <Slides>
      <MediaQuery maxWidth={630}>
        <Carousel autoplay={true} autoplayReverse={true}>
          <img src={mqOne} alt="*"/>
          <img src={mqTwo} alt="*"/>
          <img src={mqThree} alt="*"/>
          <img src={mqFour} alt="*"/>
          <img src={mqFive} alt="*"/>
        </Carousel>
      </MediaQuery>
      <MediaQuery  minWidth={631}>
        <Carousel autoplay={true} autoplayReverse={true}>
          <img src={imgOne} alt="*"/>
          <img src={imgTwo} alt="*"/>
          <img src={imgThree} alt="*"/>
          <img src={imgFour} alt="*"/>
          <img src={imgFive} alt="*"/>
        </Carousel>
      </MediaQuery>
    </Slides>
  )
}

export default Slideshow
