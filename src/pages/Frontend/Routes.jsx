import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import MyTODOs from "./TODO/MyTODOs"
import MyNavBar from "@/components/NavBar/Index"
import MyFooter from "@/components/Footer/Index"

const FrontendRoutes = () => {
  return (
    <>
      <MyNavBar />

      <div className="p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<MyTODOs />} />
        </Routes>
      </div>
      
      <MyFooter />
    </>
  )
}

export default FrontendRoutes