import { LOAD_QUIZ, ADD_QUIZ_ANSWER, CLEAR_QUIZ_ANSWER, SET_AVAILABLE_QUIZ, REMOVE_AVAILABLE_QUIZ } from '../../utils/constants'

const initialSettings = {
  quizzes: [],
  quizAvailable: [],
  quizAnswers: []
}

export const quiz = (state = initialSettings, actions) => {
  const { type, data } = actions
  
  switch (type) {
    case LOAD_QUIZ:
      return {
        ...state,
        quizzes: data
      }  
    case ADD_QUIZ_ANSWER: 
      return {
        ...state,
        quizAnswers: data
      }
    case CLEAR_QUIZ_ANSWER: 
      return {
        ...state,
        quizAnswers: []
      }
    case SET_AVAILABLE_QUIZ: 
      return {
        ...state,
        quizAvailable: data
      }
    case REMOVE_AVAILABLE_QUIZ: {
      const remainingQuiz = state.quizAvailable.filter(quiz => {
        return !state.quizAnswers.find(answers => answers.quiz.id === quiz.id)
      })
      
      return {
        ...state,
        quizAvailable: [...remainingQuiz]
      }
    }
    default:
      return state
  }
}