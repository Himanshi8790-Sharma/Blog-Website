import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import SingleBlog from './pages/SingleBlog.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Parent  */}
        <Route path="/" element={<App />}>
        {/* Children */}
        <Route path='/' element={<Home/>} /> 
        <Route path='/blog' element={<Blog/>} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/services' element={<Services/>} /> 
        <Route path='/blogs/:id' element={<SingleBlog/>} /> 


        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
