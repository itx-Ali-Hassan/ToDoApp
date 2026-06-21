import { Route, Routes } from "react-router-dom"
import AuthSingUp from "./SingUp/SingUp"
import AuthSingIn from "./SingIn/SingIn"

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthSingUp />} />
      <Route path="/sign-in" element={<AuthSingIn />} />
    </Routes>
  )
}

export default AuthRoutes