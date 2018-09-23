import { createStackNavigator } from 'react-navigation'
import { CardScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const CardStack = createStackNavigator({ CardScreen }, { headerMode: 'none' })

CardStack.navigationOptions = ({ navigation }) => {
  return stackWithNav('Card', navigation)
}

export { CardStack }
