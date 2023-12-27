import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import MainPhoto from './componentes/MainPhoto/MainPhoto'
const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenido a mi tienda!"}/>
      <MainPhoto/>
    </>
  )
}

export default App