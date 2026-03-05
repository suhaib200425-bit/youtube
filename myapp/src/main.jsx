
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { YouTubeProvider } from './context/youtube.jsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <YouTubeProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </YouTubeProvider>
)
