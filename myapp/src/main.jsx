
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { YouTubeProvider } from './context/youtube.jsx'

createRoot(document.getElementById('root')).render(
  <YouTubeProvider>
    <App />
  </YouTubeProvider>
)
