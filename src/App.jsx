import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Desserts from './Components/Desserts'
import Gift from './Components/Gift'
import Chocolate from './Components/Chocolate'
import Buy from './Components/Buy'
import New from './Components/New'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Cart from './Components/Cart'

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/Desserts' element={<Desserts />} />
          <Route path='/Chocolate' element={<Chocolate />} />
          <Route path='/Gift' element={<Gift />} />
          <Route path='/Buy' element={<Buy />} />
          <Route path='/New' element={<New />} />
        </Routes>
      </Router>
  )
}

export default App;