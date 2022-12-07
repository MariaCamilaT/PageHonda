import React from 'react'

//components
import Nav from '../components/Nav';
import Footer from '../screens/Footer';
import Slideshow from '../screens/Slideshow';
import SectionRed from '../screens/SectionRed';
import SectionNews from '../screens/SectionNews';
import SectionCards from '../screens/SectionCards';
import SectionPicture from '../screens/SectionPicture';
import SectionProducts from '../screens/SectionProducts';
import Slidershowsmall from '../screens/Slidershowsmall';
import ContainerSlider from '../screens/ContainerSlider';
import SectionNationals from '../screens/SectionNationals';
import Example from './Example';

const Main = () => {
  return (
    <>
      <Nav/>
      <Slideshow/>
      <ContainerSlider/>
      <SectionProducts/>
      <SectionRed/>
      <Slidershowsmall/>
      <SectionCards/>
      <SectionPicture/>
      <SectionNationals/>
      <SectionNews/>
      <Example/>
    </>
  )
}

export default Main
