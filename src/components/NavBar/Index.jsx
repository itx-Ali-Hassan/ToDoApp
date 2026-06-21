import { Link } from "react-router-dom"
import MenuDropDown from "../Menu/Index"

const MyNavBar = () => {
  const hoverEffect = "cursor-pointer hover:px-5 hover:py-1 rounded-3xl hover:bg-gray-900 duration-200"

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">

      <ul className="flex items-center gap-7">
        <Link to="/" className={hoverEffect}>Home</Link>
        <Link to="/my-todos" className={hoverEffect}>My TODO's</Link>
        <Link to="/dash-board" className={hoverEffect}>DashBoard</Link>
      </ul>

      <MenuDropDown />

    </div>
  )
}

export default MyNavBar