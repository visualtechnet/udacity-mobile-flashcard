import { LOAD_QUIZ, ADD_QUIZ_ANSWER, CLEAR_QUIZ_ANSWER, SET_AVAILABLE_QUIZ, REMOVE_AVAILABLE_QUIZ, ADD_QUIZ } from '../../utils/constants';
import quizzes from '../../data/quizzes.json'
import _ from 'lodash'
import { AsyncStore } from '../../storage'
import { QUIZZES } from '../../utils/constants'

export function loadQuiz () {  
  return function(dispatch) {
    return AsyncStore.get(QUIZZES).then(result => {
      if(!result) 
        AsyncStore.set(QUIZZES, quizzes)

      dispatch({
        type: LOAD_QUIZ,
        data: JSON.parse(result || quizzes)
      })

      return JSON.parse(result || quizzes)
    })
  }  
}

export function addQuiz(quiz, quizzes) {
  return function(dispatch) {
    const newQuizzes = [
      ...quizzes,
      quiz
    ]

    dispatch({
      type: ADD_QUIZ,
      data: newQuizzes
    })    

    AsyncStore.set(QUIZZES, newQuizzes)
  }
}

export function addQuizAnswer(answers) {
  return function(dispatch) {
    dispatch({
      type: ADD_QUIZ_ANSWER,
      data: answers
    })
  }
}

export function clearQuizAnswers() {
  return function (dispatch) { 
    dispatch({
      type: CLEAR_QUIZ_ANSWER
    })
  }
}

export function removeQuizAvailable() {
  return function (dispatch) {
    dispatch({
      type: REMOVE_AVAILABLE_QUIZ
    })
  }
}

export function setAvailableQuiz(quizzes) {
  return function(dispatch) {
    const randomQuizzes = _.shuffle(quizzes)    
    const quizWithRandomChoices = randomQuizzes.map(quiz => {
      return Object.assign({}, quiz, {
        choices: _.shuffle(quiz.choices)
      })
    })
    
    dispatch({
      type: SET_AVAILABLE_QUIZ,
      data: quizWithRandomChoices
    })
  }
}