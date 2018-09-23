import { LOAD_DECK } from '../../utils/constants'

const initialSettings = {
  decks: []
}

export const deck = (state = initialSettings, actions) => {
  const { type, data } = actions
  
  switch (type) {
    case LOAD_DECK:
      return {
        ...state,   
        decks: data     
      }  
    default:
      return state
  }
}