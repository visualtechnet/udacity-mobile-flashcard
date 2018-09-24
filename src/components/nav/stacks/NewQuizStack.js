import { createStackNavigator } from 'react-navigation'
import { NewQuizScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const NewQuizStack = createStackNavigator({ NewQuizScreen }, { headerMode: 'none' })

NewQuizStack.navigationOptions =  ({ navigation }) => {
  return stackWithNav('New Card', navigation)
}

export { NewQuizStack }
