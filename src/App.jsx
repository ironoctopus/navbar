import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import Secret from './Components/Secret'

function App() {

  return (
    <div className='App'>
     <Navbar/> 

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
      <Route path='/secret' element={<Secret />} />
     </Routes>
    </div>
  )
}

export default App
