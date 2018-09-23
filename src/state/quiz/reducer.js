import { LOAD_QUIZ } from '../../utils/constants'

const initialSettings = {
  quizzes: []
}

export const quiz = (state = initialSettings, actions) => {
  const { type, data } = actions
  
  switch (type) {
    case LOAD_QUIZ:
      return {
        ...state,
        quizzes: data
      }  
    default:
      return state
  }
}