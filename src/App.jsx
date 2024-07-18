// style 
import { createContext, useReducer } from "react"
import "./App.css"
import { ComponentA, ComponentB, ComponentC } from "./components"

// INIZIALIZIAMO UNO STATO INZIALE E FUNZIONE DI REDUCER 
const initialState = 0
const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return initialState
    default:
      return state
  }
}

// CREIAMO IL CONTEXT
export const COUNTCONTEXT = createContext()

function App() {

  // CREIAMO QUì LO STATO TRAMITE USEREDUCER
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={container}>
      COUNT STATE: { count }
      {/* IL PROVIDER FORNIRA' AI COMPONENTI E I SUOI FIGLI UN VALORE CHE AVRA' IL VALORE DEL COUNT STATE E UN VALORE PER EFFETTUARE LE AZIONI SULLO STATE */}
      <COUNTCONTEXT.Provider value={{countState: count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </COUNTCONTEXT.Provider>
    </div>
  )
}

export default App

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,137,137,1) 100%)",
	gap: 8,
	fontSize: "80px",
	backgrounColor: "red",
}
