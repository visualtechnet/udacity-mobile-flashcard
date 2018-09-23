import { LOAD_DECK } from "../../utils/constants";
import decks from '../../data/decks.json'


export function loadDecks() {
  return function(dispatch) {
    dispatch({
      type: LOAD_DECK,
      data: decks
    })
  }
}