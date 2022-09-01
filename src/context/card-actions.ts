import { AddCardType, ChangeCardTitleType, RemoveCardType, searchCardType } from "../types/types"

export const ADD_CARD = 'ADD-CARD'
export const CHANGE_CARD_TITLE = 'CHANGE-CARD-TITLE'
export const REMOVE_CARD = 'REMOVE-CARD'
export const SEARCH_CARD = 'SEARCH-CARD'







export const addCard = (title: string): AddCardType => {
  return {
    type: ADD_CARD,
    title
  }
}
export const ChangeCardTitle = (id: string, title: string): ChangeCardTitleType => {
  return {
    type: CHANGE_CARD_TITLE,
    id,
    title
  }
}
export const removeCard = (id: string): RemoveCardType => {
  return {
    type: REMOVE_CARD,
    id
  }
}
export const searchCard = (title: string): searchCardType => {
  return {
    type: SEARCH_CARD,
    title
  }
}




