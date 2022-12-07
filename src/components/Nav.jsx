import React, {useState} from 'react'
import styled from 'styled-components';
import { NavS, Container, Logo, Menu, MenuItem, Shopping, ItemLink, ContainerSearch, ContainerMenu, Search} from './NavStyled';

//components
import Input from './Input';

//img
import logo from '../img/logo.svg'
import cart from '../img/shopping-cart.svg'
import Twitter from '../img/icons/twitter.svg'
import Youtube from '../img/icons/you-tube.svg'
import Facebook from '../img/icons/facebook.svg'
import Instagram from '../img/icons/instagram.webp'

//icons
import { items } from '../utils/Items'; 
import { BiMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

const Nav = () => {

  const [click, setClick] = useState(false);

  const [clickSearch, setClickSearch] = useState(false);

  return (
    <NavS>
      <Container>
        <Logo click={click} clickSearch={clickSearch}>
          <ContainerMenu clickSearch={clickSearch} >
            <div>
              {click ? <IoCloseSharp onClick={() => {setClick(!click)}}/> :
              <BiMenu onClick={() => {setClick(!click)}}/>}
              <h1>MENÚ</h1>
            </div>
            {
              clickSearch? <div onClick={() => {setClickSearch(!clickSearch)}}> 
                <IoCloseSharp/>
                <h1>CERRAR</h1>
              </div>
              :''
            }
          </ContainerMenu>
            <img src={logo} alt="" />
          <ContainerSearch click={click}>
            {clickSearch? '': <BsSearch onClick={() => {setClickSearch(!clickSearch)}}/>}
          </ContainerSearch>
        </Logo>
            {clickSearch ? <Search><Input/></Search> : ''}
        <Menu click={click}>
          <MenuItem>
            {
              items.map((item, index) => {

                let change = '';

                if(!click && index === 0) {
                  change = <MdArrowDropDown/>
                } else if (!click && index === 2) {
                  change = <MdArrowDropDown/>
                } else if (!click && index === 4){
                  change = <MdArrowDropDown/>
                }

                return(
                  <ItemLink key={index}>
                    <span>{item.number}</span>
                    {item.text}
                    {click ? <IoIosArrowDropright/> : ''}
                    {change}
                  </ItemLink>
                )
              })
            }
            <ItemLink className='item_ocult'><span>07</span>Compra Ahora<img src={cart} alt="" /></ItemLink>
          </MenuItem>
            {
              click? 
              <div>
                <div>
                  <li>07  Ayuda y Preguntas</li>
                  <li>08 Campanas de Seguridad</li>
                  <li>09 Contactanos</li>
                  <li>010 Trabaja con nosotros</li>
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
                    <h2>Honda Dream</h2>
                    <img src={Facebook} alt="Facebook" />
                    <img src={Instagram} alt="Instagram" />
                  </div>
                </div>
              </div>
              :''
            }
        </Menu>
        <Shopping>
          <a href="shopping">Compra ahora</a>
          <img src={cart} alt="cart" />
        </Shopping>
      </Container>
    </NavS>
  )
}

export default Nav


