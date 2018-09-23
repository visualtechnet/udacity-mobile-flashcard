import React from 'react'
import { Ionicons, Foundation } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const stackWithNav = ({ navigation }) => {
  const { routeName } = navigation.state  
  const header = Object.assign({}, {
    headerStyle: {
      backgroundColor: '#0C202B'
    },
    headerTintColor: '#F9FDCE',
    headerTitleStyle: {
      fontWeight: 'bold'
    },    
    headerTitle: "Sample",
    headerLeft: routeName !== 'Deck' && routeName !== 'Card' ? (<TouchableOpacity onPress={() => navigation.toggleDrawer()}><Ionicons name="ios-menu" color="#F9FDCE" size={32} style={{ paddingLeft: 10 }} /></TouchableOpacity>)
    : (<TouchableOpacity onPress={() => navigation.goBack()}><Foundation name="arrow-left" color="#F9FDCE" size={32} style={{ paddingLeft: 10 }} /></TouchableOpacity>)
  })

  return header
}

export { stackWithNav }