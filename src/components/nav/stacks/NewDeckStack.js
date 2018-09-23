import { createStackNavigator } from 'react-navigation'
import { NewDeckScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const NewDeckStack = createStackNavigator({ NewDeckScreen }, { headerMode: 'none' })

NewDeckStack.navigationOptions =  ({ navigation }) => {
  return stackWithNav('New Deck', navigation)
}

export { NewDeckStack }
