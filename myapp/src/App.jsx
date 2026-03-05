import './App.css'
import NavBar from './Compones/NavBar/NavBar'
import Home from './Page/Home/Home'
import Short from './Page/Short/Short'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Short />} />
      </Routes>
    </div>
  )
}

export default App
