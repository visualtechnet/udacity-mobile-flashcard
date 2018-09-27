import { LOAD_DECK, GET_DECK_QUESTIONS, ADD_DECK, ADD_QUIZ_DECK } from '../../utils/constants'

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
    case ADD_QUIZ_DECK:
      return {
        ...state,
        decks: data
      }    
    default:
      return state
  }
}