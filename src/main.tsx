import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home.tsx'
import Cafe from './pages/cafe.tsx'
import Blog from './pages/blog.tsx'
import Me from './pages/me.tsx'

createRoot(document.getElementById('root')!).render(
 
  <Router>
      <Routes>
        <Route path="/" element={ 
          <StrictMode>
            <Home />
            </StrictMode>
        } />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/whoami" element={<Me />} />
      </Routes>
    </Router>
)
