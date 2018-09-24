import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { NewDeckStack, HomeStack, CardStack, DeckStack, NewQuizStack } from '../stacks'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { drawerOptions } from '../../header';

const MainStack = createStackNavigator({ 
  Home: HomeStack,  
  Deck: DeckStack,
  Card: CardStack,
  NewDeck: NewDeckStack,  
  NewQuiz: NewQuizStack  
}, {
  initialRouteName: 'Home'
})

MainStack.navigationOptions = ({ navigation }) => {
  return Object.assign({}, drawerOptions(navigation, 'Dashboard', () => <FontAwesome name="home" color='#000' size={24} />))
}

const MainDrawer = createDrawerNavigator({
  Dashboard: MainStack,
  NewDeck: NewDeckStack
})

export { MainDrawer }