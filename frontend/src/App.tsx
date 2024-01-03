import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import RegisterModal from './registered/RegisterModal'
import MainFeed from './feed/MainFeed'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/registered' element={<RegisterModal />}/>
          <Route path="/feed" element={<MainFeed />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
