import { v1 } from "uuid"
import { ActionTypes, InitialStateType } from "../types/types"
import {
  ADD_CARD,
  CHANGE_CARD_TITLE,
  REMOVE_CARD,
  SEARCH_CARD
} from './card-actions'








export const cardReducer = (state: InitialStateType, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_CARD: {
      return { ...state, cards: [...state.cards, { id: v1(), title: action.title }] }
    }
    case CHANGE_CARD_TITLE: {
      return { ...state, cards: state.cards.map(card => card.id === action.id ? { ...card, title: action.title } : card) }
    }
    case REMOVE_CARD: {
      return { ...state, cards: state.cards.filter(card => card.id !== action.id) }
    }
    case SEARCH_CARD: {
      if (!action.title) {
        return state
      } else {
        return { ...state, cards: state.cards.filter(card => card.title.toLowerCase().includes(action.title.toLowerCase())) }
      }
    }
    default: {
      return state
    }
  }
}


