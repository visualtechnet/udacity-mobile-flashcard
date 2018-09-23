import { createStackNavigator } from 'react-navigation'
import { DeckScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const DeckStack = createStackNavigator({ DeckScreen }, { headerMode: 'none' })

DeckStack.navigationOptions =  ({ navigation }) => {
  return stackWithNav('Deck', navigation)
}

export { DeckStack }
