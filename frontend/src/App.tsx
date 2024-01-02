import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Register />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
