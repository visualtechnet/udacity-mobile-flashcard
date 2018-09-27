import { LOAD_DECK, GET_DECK_QUESTIONS, ADD_DECK, ADD_QUIZ_DECK } from "../../utils/constants";
import decks from '../../data/decks.json'
import { AsyncStore } from '../../storage'
import { DECKS } from '../../utils/constants'

export function loadDecks() {
  return  function(dispatch) {
    return AsyncStore.get(DECKS).then(result => {      
      if(!result)   
        AsyncStore.set(DECKS, decks)

      dispatch({
        type: LOAD_DECK,
        data: JSON.parse(result || decks)
      })

      return JSON.parse(result || decks)
    })
  }
}

export function addDeck(deck, decks) { 
  return function (dispatch) { 
    dispatch({
      type: ADD_DECK,
      data: deck
    })  
    
    const newDecks = [
      ...decks,
      deck
    ]

    AsyncStore.set(DECKS, newDecks)
  }
}


export function addQuizToDeck(quiz, deck, decks) {
  return function(dispatch) {
    const isQuizExist = deck.quizzes.find(d => d === quiz.id)

    if(!isQuizExist) {
      const newDeck = Object.assign({}, deck, { quizzes: [ ...deck.quizzes, quiz.id ] })
      const allNewDecks = [ 
        ...decks.filter(d => d.id !== newDeck.id), 
        newDeck
      ]

      dispatch({
        type: ADD_QUIZ_DECK,
        data: allNewDecks
      })
      
      AsyncStore.set(DECKS, allNewDecks)
    }
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