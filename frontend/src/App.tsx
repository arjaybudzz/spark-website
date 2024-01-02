import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import RegisterModal from './registered/RegisterModal'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Register />}/>
          <Route path='/registered' element={<RegisterModal />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
