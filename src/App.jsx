import './App.css'
import { HookuseRefFirstPart, HookuseRefSecondpart } from './components'

function App() {
  return (
    <div style={container}>
      {/* <HookuseRefFirstPart/> */}
      <HookuseRefSecondpart />
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
