import { LOAD_DECK, GET_DECK_QUESTIONS, ADD_DECK } from "../../utils/constants";
import decks from '../../data/decks.json'


export function loadDecks() {
  return function(dispatch) {
    dispatch({
      type: LOAD_DECK,
      data: decks
    })
  }
}

export function addDeck(deck) { 
  return function (dispatch) { 
    dispatch({
      type: ADD_DECK,
      data: deck
    })  
  }
}

export function getDeckWithQuestions(id, decks, quizzes) {
  return function (dispatch) {         

    const deck = decks.find(deck => deck.id === id)
    const selectedQuizzes = deck && deck.quizzes.map(quizId => {
      return quizzes.find(quiz => quiz.id === quizId)
    });    
    const deckWithQuestions = Object.assign({}, deck, { quizzes: selectedQuizzes })    

    dispatch({
      type: GET_DECK_QUESTIONS,
      data: deckWithQuestions
    })
  }
}