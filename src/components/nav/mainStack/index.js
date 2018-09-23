import { createStackNavigator } from 'react-navigation';
import { HomeStack, CardStack, DeckStack, NewDeckStack, NewQuizStack } from '../stacks'

const MainStack = createStackNavigator({
  Home: HomeStack,  
  NewDeck: NewDeckStack,  
  NewQuiz: NewQuizStack,
  Card: CardStack,
  Deck: DeckStack
}, {
  initialRouteName: 'Home'
})

export { MainStack }