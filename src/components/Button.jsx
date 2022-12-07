import React from 'react'
import styled from 'styled-components'

const ButtonS = styled.button`
  width: 200px;
  height: 38px;
  color: white;
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 3px solid white;
  background-color: transparent;
  font-family: Helvetica, sans-serif;

    &:hover {
      color: black;
      transition-duration: 1s;
      background-color: white;
    }
`

const Button = ({text}) => {
  return (
    <ButtonS>{text}</ButtonS>
  )
}

export default Button
