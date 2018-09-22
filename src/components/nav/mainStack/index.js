import { HomeScreen, DeckScreen, NewDeckScreen, NewQuestionScreen, QuizScreen } from '../../../navigation'
import { createStackNavigator } from 'react-navigation';
import { headerOptions } from '../../header'
import { mainDrawer } from '../mainDrawer';

const MainStack = createStackNavigator({
  Home: {
    screen: mainDrawer
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