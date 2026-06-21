import { createContext, useState } from "react"

export const AppContext = createContext()

const AppProvider = () => {
    const [auth, setAuth] = useState(false)
  return (
    <AppContext.Provider value={{ auth, setAuth }}>
      <div>AppProvider</div>
    </AppContext.Provider>
  )
}

export default AppProvider