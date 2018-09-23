import { createStackNavigator } from 'react-navigation'
import { HomeScreen } from '../../../navigation'

const HomeStack = createStackNavigator({ HomeScreen })

HomeStack.navigationOptions = Object.assign({}, { headerTitle: 'Home' })

export { HomeStack }
