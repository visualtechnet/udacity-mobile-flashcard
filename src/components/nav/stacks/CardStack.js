import { createStackNavigator } from 'react-navigation'
import { CardScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const CardStack = createStackNavigator({ CardScreen })

CardStack.navigationOptions = Object.assign({}, { headerTitle: 'Home' })

export { CardStack }
