import { combineReducers } from "redux";
import { home } from './home/reducer'
import { newDeck } from "./newDeck/reducer"
import { quiz} from './quiz/reducer'
import { deck } from './deck/reducer'
import { newQuestion } from './newQuestion/reducer'

const reducers = combineReducers({  
  home,
  quiz,
  newDeck,
  deck,
  newQuestion
})

export default reducers;