import { createDrawerNavigator } from 'react-navigation';
import { HomeScreen, DeckScreen, NewDeckScreen, NewQuestionScreen, QuizScreen } from '../../../navigation'
import { drawerOptions, headerOptions } from '../../header';

const mainDrawer = createDrawerNavigator({
  Dashboard: {
    screen: HomeScreen
  },
  Deck: {
    screen: DeckScreen
  },
  NewDeck: {
    screen: NewDeckScreen
  },
  NewQuestion: {
    screen: NewQuestionScreen
  },
  QuizScreen: {
    screen: QuizScreen
  }
}, {
  initialRouteName: 'Dashboard',
  navigationOptions: headerOptions
})

export { mainDrawer }