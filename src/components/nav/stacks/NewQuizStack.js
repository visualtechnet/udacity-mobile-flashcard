import { createStackNavigator } from 'react-navigation'
import { NewQuizScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const NewQuizStack = createStackNavigator({ NewQuizScreen })

NewQuizStack.navigationOptions =  Object.assign({}, { headerTitle: 'New Quiz' })

export { NewQuizStack }
