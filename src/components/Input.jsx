import React from 'react'
import styled from 'styled-components'

const InputS = styled.input`
  width: 400px;
  height: 40px;
  border: none;
  font-size: 1.7rem;
  font-weight: bold;
  background-color: white;
  font-family: Helvetica, sans-serif;
  border-bottom: 3px solid #EAEAEA;

    &:focus-visible {
      outline: none;
    }
`

const Input = () => {
  return (
    <InputS placeholder='Buscar Motos, Categorias, Referencias...'/>
  )
}

export default Input
