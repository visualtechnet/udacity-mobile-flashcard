import { LOAD_DECK, GET_DECK_QUESTIONS, ADD_DECK } from '../../utils/constants'

const initialSettings = {
  decks: [],
  deckWithQuestions: []
}

export const deck = (state = initialSettings, actions) => {
  const { type, data } = actions
  
  switch (type) {
    case LOAD_DECK:
      return {
        ...state,   
        decks: data     
      }
    case GET_DECK_QUESTIONS: 
      return {
        ...state,
        deckWithQuestions: data
      }
    case ADD_DECK: {
      const newDecks = [
        ...state.decks,
        { ...data }
      ]
            
      return {
        ...state,
        decks: newDecks
      }
    }
    default:
      return state
  }
}