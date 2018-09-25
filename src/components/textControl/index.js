import React from 'react'
import { TextInput } from 'react-native'
import { TextWrapper } from './style'

const TextControl = (props) => {
  return (
    <TextWrapper>
      <TextInput {...props} style={{ width: '100%', height: 50, fontSize: 20 }}/>
    </TextWrapper>
  )
}

export { TextControl }