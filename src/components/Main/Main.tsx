import Container from "@mui/material/Container/Container"
import Grid from "@mui/material/Grid/Grid"
import { useContext } from "react"
import CardContext from "../../context/card-context"
import { AddItemForm } from "../../utils/AddItemForm"
import { Card } from "../Card/Card"

export const Main = () => {
  const { cards, addItem, isSideBarOpen } = useContext(CardContext)


  return (<>

    <Container fixed sx={isSideBarOpen ? { ml: '250px' } : { ml: 'auto' }}>

      <Grid container sx={{ p: "20px", display: 'flex', justifyContent: "center", borderRadius: 10 }}>
        <AddItemForm addCard={addItem} />
      </Grid>
      <Grid container spacing={3}>
        {cards.map(card => {
          return <Card key={card.id} id={card.id} title={card.title} />
        })}
      </Grid>
    </Container>
  </>
  )
}