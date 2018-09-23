import { createStackNavigator } from 'react-navigation'
import { DeckScreen } from '../../../navigation'
import { stackWithNav } from '../../header';

const DeckStack = createStackNavigator({ DeckScreen })

DeckStack.navigationOptions =  Object.assign({}, { headerTitle: 'Deck' })

export { DeckStack }
