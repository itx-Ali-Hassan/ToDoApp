import { createContext, useState } from "react"

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)
  return (
    <AppContext.Provider value={{ auth, setAuth }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider