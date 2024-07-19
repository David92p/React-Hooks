import { useContext } from "react"
import { COUNTCONTEXT } from "../App"

const ComponentD = () => {
  // INIZIALIZIAMO IL CONTEXT 
  const countContext = useContext(COUNTCONTEXT)

  return (
    <div style={container}>
		{/* Visualiziamo lo state global trasmesso tramite il context derivante da App.jsx */}
      COMPONENT D { countContext.countState }
      <button 
        // utiliziamo la proprietà countDispatch del context che richiama il dispatch del reducer
				onClick={() => countContext.countDispatch({type: "increment"})} style={button}>increment counter 1
			</button>
      <button
				onClick={() => countContext.countDispatch({type: "decrement"})} style={button}>decrement counter 1
			</button>
			<button 
				onClick={() => countContext.countDispatch({type: "reset"})} style={button}>reset
			</button>
    </div>
  )
}

export default ComponentD

// Style
const container = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 8,
	fontSize: "80px",
	width: "800px",
	height: "300px",
	backgrounColor: "red",
}

const button = {
	padding: "10px",
	borderRadius: "5px",
	border: "1px solid orange",
	fontSize: "20px",
	backgrounColor: "#f4ef89"
}
