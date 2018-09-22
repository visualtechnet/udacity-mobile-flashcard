import { ADD_DECK } from '../../utils/constants'

const initialSettings = {

}

export const newDeck = (state = initialSettings, actions) => {
  const { type, data } = actions
  
  switch (type) {
    case ADD_DECK:
      return {
        ...state,        
      }  
    default:
      return state
  }
}