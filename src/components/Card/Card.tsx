import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import { useContext } from "react";
import cardContext from "../../context/card-context";
import { EditableSpan } from "../../utils/EditableSpan";








type CardPropsType = {
  id: string
  title: string
}


export const Card = ({ id, title }: CardPropsType) => {

  const { removeItem, changeItemTitle } = useContext(cardContext)

  const removeCard = () => {
    removeItem(id)
  }

  const changeTitle = (title: string) => {
    changeItemTitle(id, title)
  }

  return <>
    <Grid item xs={3} key={id}>
      <Paper sx={{
        p: '0 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <EditableSpan value={title} onChange={changeTitle} removeCard={removeCard} />
      </Paper>
    </Grid >

  </>
}