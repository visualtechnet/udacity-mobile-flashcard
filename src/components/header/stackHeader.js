import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const headerOptions = ({ navigation }) => {
  const { params } = navigation.state

  const header = Object.assign({}, {
    headerStyle: {
      backgroundColor: '#0C202B'
    },
    headerTintColor: '#F9FDCE',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()}><Ionicons name="ios-menu" color="#F9FDCE" size={32} style={{ paddingLeft: 10 }} /></TouchableOpacity>
  })

  return header
}

export { headerOptions }