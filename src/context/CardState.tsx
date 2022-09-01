import { ChangeEvent, useReducer, useState } from "react";
import { CardContextType, InitialStateType } from "../types/types";
import { addCard, ChangeCardTitle, removeCard, searchCard } from "./card-actions";
import CardContext from "./card-context";
import { cardReducer } from "./card-reducer";

export const CardState: React.FC<any> = (props) => {
  const initialState: InitialStateType = {
    cards: [],
  }

  const [state, dispatch] = useReducer(cardReducer, initialState)
  const [searchText, setSearchText] = useState('')
  const [sideBarOpen, setSideBarOpen] = useState(true)



  // Add card
  const addItem = (title: string) => {
    dispatch(addCard(title))
  }

  // Change cards title
  const changeItemTitle = (id: string, title: string) => {
    dispatch(ChangeCardTitle(id, title))
  }

  // Remove card
  const removeItem = (id: string) => {
    dispatch(removeCard(id))
  }

  // Search card by title
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setSearchText('')
      dispatch(searchCard(''))
      return;
    }
    setSearchText(e.target.value)
    dispatch(searchCard(searchText))

  };

  const toggleSideBarOpen = () => {
    setSideBarOpen(!sideBarOpen)
  }


  const defaultValue: CardContextType = {
    cards: state.cards,
    addItem,
    changeItemTitle,
    removeItem,
    handleSearch,
    searchText,
    toggleSideBarOpen,
    isSideBarOpen: sideBarOpen,
  }



  return (
    <CardContext.Provider value={defaultValue}>
      {props.children}
    </CardContext.Provider>
  );
};