import { createStackNavigator } from 'react-navigation'
import { NewDeckScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const NewDeckStack = createStackNavigator({ NewDeckScreen })

NewDeckStack.navigationOptions =  Object.assign({}, { headerTitle: 'New Deck' })

export { NewDeckStack }
