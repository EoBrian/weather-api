//css
import './App.css'

//react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

//components
import MenuApp from './components/MenuApp/MenuApp'

//pages
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'


function App() {
 
  return (
    <>
      <Router>
        <header className="menu-app">
          <MenuApp/>
        </header>

        <section className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>            
          </Routes>
        </section>
      </Router>
    </>
  )
}

export default App
