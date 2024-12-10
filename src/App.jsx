import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import FactoryEl from "./Components/FactoryEl"
import About from "./Components/About"
import NewLaunches from "./Components/NewLaunches"
import Products from "./Components/Products"




const App=()=>{
  const display=(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About-Company" element={<About/>}/>
          <Route path="/Factory" element={<FactoryEl/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/New-Launches" element={<NewLaunches/>}/>
          <Route path="/Products" element={<Products/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  )
  return display
}
export default App