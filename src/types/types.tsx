import { ChangeEvent } from "react"
import { ADD_CARD, CHANGE_CARD_TITLE, REMOVE_CARD, SEARCH_CARD } from "../context/card-actions"


// ==================Initial-state-type=================

export type InitialStateType = {
  cards: CardType[]
}

// ==================context-card-type=================

export type CardContextType = {
  cards: CardType[]
  addItem: (title: string) => void
  changeItemTitle: (id: string, title: string) => void
  removeItem: (id: string) => void
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  searchText: string
  toggleSideBarOpen: () => void
  isSideBarOpen: boolean
}

// ==================Card-type=================

export type CardType = {
  id: string
  title: string
}

// ==================Actions-type=================

export type AddCardType = {
  type: typeof ADD_CARD
  title: string
}
export type ChangeCardTitleType = {
  type: typeof CHANGE_CARD_TITLE
  id: string
  title: string
}
export type RemoveCardType = {
  type: typeof REMOVE_CARD
  id: string
}
export type searchCardType = {
  type: typeof SEARCH_CARD
  title: string
}

export type ActionTypes = AddCardType | ChangeCardTitleType | RemoveCardType | searchCardType

