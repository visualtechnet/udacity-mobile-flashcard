import { LOAD_QUIZ } from '../../utils/constants'

const initialSettings = {

}

export const quiz = (state = initialSettings, actions) => {
  const { type, data } = actions
  
  switch (type) {
    case LOAD_QUIZ:
      return {
        ...state,        
      }  
    default:
      return state
  }
}