import './App.css'
import NavBar from './Compones/NavBar/NavBar'
import Home from './Page/Home/Home'
import PlayScreen from './Page/PlayScreen/PlayScreen';
import Profile from './Page/Profile/Profile';
import Short from './Page/Short/Short'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Short />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/watch/:id" element={<PlayScreen />} />
      </Routes>
    </div>
  )
}

export default App
