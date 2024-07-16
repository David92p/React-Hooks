// style 
import { createContext } from "react"
import "./App.css"
import { ComponentA } from "./components"

// Inziamo creando un context con il metodo createContext
export const USERCONTEXT = createContext()
export const CHANNELCONTEXT = createContext()

function App() {

  return (
    <div style={container}>
      {/* Racchiudiamo il componente principale che utilizzerà il context tramite un provider e forniamo il suo valore  */}
      <USERCONTEXT.Provider value={"David"}>
        <CHANNELCONTEXT.Provider value={{github:"David92p"}}>
          <ComponentA/>
        </CHANNELCONTEXT.Provider>
      </USERCONTEXT.Provider>
    </div>
  )
}

export default App

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,137,137,1) 100%)",
}
