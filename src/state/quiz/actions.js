import { LOAD_QUIZ } from '../../utils/constants';
import quizzes from '../../data/quizzes.json'

export function loadQuiz() {  
  return function(dispatch) {
    dispatch({
      type: LOAD_QUIZ,
      data: quizzes
    })            
  }  
}