import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { NewDeckScreen } from '../../../navigation'
import { stackWithNav, drawerOptions } from '../../header';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const NewDeckStack = createStackNavigator({ NewDeckScreen }, { headerMode: 'none' })

NewDeckStack.navigationOptions =  ({ navigation }) => {
  return stackWithNav('New Deck', navigation, 
    drawerOptions(navigation, 'New Deck', () => <MaterialCommunityIcons name="cards" color='#000' size={24} />)
  )
}

export { NewDeckStack }
