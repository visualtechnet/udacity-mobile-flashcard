import { createStackNavigator } from 'react-navigation'
import { HomeScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const HomeStack = createStackNavigator({ HomeScreen }, { headerMode: 'none' })

HomeStack.navigationOptions = ({ navigation }) => {
    return stackWithNav('Home', navigation)
}

export { HomeStack }
