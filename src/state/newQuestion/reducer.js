import { ADD_QUESTION } from '../../utils/constants'

const initialSettings = {

}

export const newQuestion = (state = initialSettings, actions) => {
  const { type, data } = actions
  
  switch (type) {
    case ADD_QUESTION:
      return {
        ...state,        
      }  
    default:
      return state
  }
}