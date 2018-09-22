import { HomeScreen, DeckScreen, NewDeckScreen, NewQuestionScreen, QuizScreen } from '../../../navigation'
import { createStackNavigator } from 'react-navigation';
import { headerOptions } from '../../header'

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Deck: {
    screen: DeckScreen
  }, 
  NewDeck: {
    screen: NewDeckScreen
  },
  Quiz: {
    screen: QuizScreen
  },
  NewQuestion: {
    screen: NewQuestionScreen
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: headerOptions
})

export { MainStack }