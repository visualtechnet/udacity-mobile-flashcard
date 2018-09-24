import React from 'react'
import { Button } from 'react-native'
import { Container } from './style'

const ButtonMain = (props) => {
  return <Container style={{ ...props.style }}><Button color="#fff" {...props}></Button></Container>
}

export { ButtonMain }