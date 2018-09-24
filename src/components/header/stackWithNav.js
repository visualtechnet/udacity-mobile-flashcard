import React from 'react'
import { Ionicons, Foundation } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const stackWithNav = (title = 'Sample', navigation, drawerOptions) => {
  const { routeName } = navigation.state  
  
  let navOptions = Object.assign({}, {
    headerStyle: {
      backgroundColor: '#0C202B'
    },
    headerTintColor: '#F9FDCE',
    headerTitleStyle: {
      fontWeight: 'bold'
    },    
    headerTitle: title,
    headerLeft: routeName === 'Home' ? (<TouchableOpacity onPress={() => navigation.toggleDrawer()}><Ionicons name="ios-menu" color="#F9FDCE" size={32} style={{ paddingLeft: 10 }} /></TouchableOpacity>)
    : (<TouchableOpacity onPress={() => navigation.goBack()}><Foundation name="arrow-left" color="#F9FDCE" size={32} style={{ paddingLeft: 10 }} /></TouchableOpacity>)    
  })  
  
  if(drawerOptions) { 
    return Object.assign({}, {...navOptions}, {...drawerOptions})
  }

  return navOptions
}

export { stackWithNav }