import { LOAD_HOME } from '../../utils/constants'

const initialSettings = {

}

export const home = (state = initialSettings, actions) => {
  const { type, data } = actions
  
  switch (type) {
    case LOAD_HOME:
      return {
        ...state,        
      }  
    default:
      return state
  }
}