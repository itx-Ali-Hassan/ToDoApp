import { Route, Routes } from "react-router-dom"
import FrontendRoutes from "./Frontend/Routes"
import AuthRoutes from "./Auth/Routes"
import DashBoardRoutes from "./DashBoard/Routes"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<FrontendRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/dash-board/*" element={<DashBoardRoutes />} />
    </Routes>
  )
}

export default AppRoutes