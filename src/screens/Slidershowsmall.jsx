import React from 'react'
import styled from 'styled-components'

//librery
import Carousel from 'nuka-carousel'

//img
import img1 from '../img/slidertwo/img1.webp'
import img2 from '../img/slidertwo/img2.webp'
import img3 from '../img/slidertwo/img3.webp'
import img4 from '../img/slidertwo/img4.webp'
import img5 from '../img/slidertwo/img5.webp'

const Section = styled.section`
  width: 100%;
  height: 230px;
  
  img {
    width: 100%;
    height: 200px;
  }

  @media screen and (max-width: 324px) {
    margin-top: 50px;
  }

  @media screen and (min-width:324px) and (max-width: 430px){
    margin-top: 95px;
  }

  @media screen and (min-width:430px) and (max-width: 460px){
    margin-top: 130px;
  }

  @media screen and (min-width:461px) and (max-width: 599px){
    margin-top: 230px;
  }

  @media screen and (min-width:600px) and (max-width: 815px){
    margin-top: 360px;
  }

  @media screen and (min-width:816px) and (max-width: 999px){
    margin-top: 450px;
  }

  @media screen and (min-width:1000px) and (max-width: 1075px){
    margin-top: 500px;
  }

  @media screen and (min-width: 1076px) {
    height: 415px;
    margin-top: 300px;
    padding: 0px 20px 0px 20px;

      img {
        height: 350px;
      }
    }
`

const Slidershowsmall = () => {
  return (
    <Section>
      <Carousel autoplay={true}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </Carousel>
    </Section>
  )
}

export default Slidershowsmall
