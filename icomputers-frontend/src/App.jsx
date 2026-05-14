import { Route, Routes } from "react-router-dom"
import "./App.css"
import Adminpage from "../pages/adminPage"
import Homepage from "../pages/homePage"
import TrendingProducts from "./components/trendingProducts"
import TextPage from "../pages/text"

function App() {

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-primary text-secondary '>
        <Routes>

          <Route path='/' element={<Homepage />}/>

          <Route path='/admin/*' element={<Adminpage />}/>

          <Route path='/text' element={<TextPage />}/>

        </Routes>
      </div>   
      </>

  )
}
export default App

