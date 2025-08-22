import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import './App.css';
import Footer from "./components/Footer";


function App() {


  return (
    <>
     <Navbar/>
     {/* By This we can access the children */}
     <Outlet/>
    <Footer/>
    </>
  )
}

export default App
