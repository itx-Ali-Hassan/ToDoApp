import { Route, Routes } from 'react-router-dom'
import DashBoardLayOut from './LayOut/LayOut'

const DashBoardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoardLayOut />} />
    </Routes>
  )
}

export default DashBoardRoutes