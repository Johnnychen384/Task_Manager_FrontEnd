import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Login from "./Components/Login"
import Register from './Components/Register';
import Main from './Components/Main'

const App = () => {
  const [user, setUser] = useState({id: null, username: '', password: ''})
  

  // const navigate = useNavigate()

  // function for login
  const handleLogin = (data) => {
    axios.post('https://floating-escarpment-86191.herokuapp.com/api/user/login', data).then((res) => {
      setUser(res.data)
    })
    .catch(() => alert("Wrong information. Please Try again"))
  }

  // function for registration
  const handleRegister = (data) => {
    axios.post('https://floating-escarpment-86191.herokuapp.com/api/user/register', data).then((res) => {
      setUser(res.data)
    })
  }

  

  return (
    <main className='text-center w-100 mx-auto my-5'>
      <Routes>
        <Route exact path="/" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/register" element={<Register handleRegister={handleRegister}/>} />
        <Route path='/main' element={<Main user={user}/>} />

      </Routes>
    
    </main>
  );
}

export default App;
