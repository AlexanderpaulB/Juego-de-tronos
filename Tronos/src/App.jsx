import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Personaje from './pages/Personaje/Personaje'
import Casas from './pages/Casas/Casas'
import Casa from './pages/Casa/Casa'
import Cronologia from './pages/Cronologia/Cronologia'
import Navigation from './components/Navigation/Navigation'


function App() {
  

  return (
    <>
      <Navigation></Navigation>
      <Router>

        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          
          <Route path='/personaje:name' element={<Personaje></Personaje>}></Route>
          <Route path='/casas' element={<Casas></Casas>}></Route>
          <Route path='/casa:house' element={<Casa></Casa>}></Route>
          <Route path='/cronologia' element={<Cronologia></Cronologia>}></Route>
          
        </Routes>

      </Router>
    </>
  )
}

export default App
