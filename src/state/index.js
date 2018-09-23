import { combineReducers } from "redux";
import { quiz} from './quiz/reducer'
import { deck } from './deck/reducer'

const reducers = combineReducers({    
  quiz,  
  deck  
})

export default reducers;