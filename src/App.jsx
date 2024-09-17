// import Promesas from './componentes/Promesas/Promesas'
import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
// import Map from './componentes/Map/map'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {

  return (
    <>
      {/* <Promesas/> */}
      {/* <Map/>     */}
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}

export default App
