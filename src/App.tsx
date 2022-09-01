import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { CardState } from "./context/CardState"







export const App = () => {

  return (
    <>

      <CardState>
        <Header />
        <Sidebar />

        <Main />
      </CardState>
    </>
  )
} 