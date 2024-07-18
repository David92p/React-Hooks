import { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1
		case "decrement":
			return state  - 1 
		case "reset":
			return initialState
		default: 
			return state
	}
}

const CounterThree = () => {
	// di seguito due useReducer con due dispatch diversi
	// anche se diversi, i dispatch richiamano lo stesso reducer per gestire lo stato
	// il componente gestisce più variabili di stato - counter e counterTwo - è buona norma avere più di un solo useReducer con il proprio dispatch metodo che fanno uso della funzione reducer 
	// con questo approccio, a differenza del CounterTwo component, possiamo avere una sola action type nel reducer
	const [count, dispatch] =  useReducer(reducer, initialState) 
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  
	return (
    <div style={container}>
			Count: { count }
			{/* il click del bottone richiama il parametro dispatch di useReducer passando ad esso un action type */}
      <button onClick={() => dispatch("increment")} style={button}>increment</button>
      <button onClick={() => dispatch("decrement")} style={button}>decrement</button>
      <button onClick={() => dispatch("reset")} style={button}>reset</button>
			Count Two: { countTwo }
			{/* il click del bottone richiama il parametro dispatchTwo di useReducer passando ad esso un action type */}
      <button onClick={() => dispatchTwo("increment")} style={button}>increment</button>
      <button onClick={() => dispatchTwo("decrement")} style={button}>decrement</button>
      <button onClick={() => dispatchTwo("reset")} style={button}>reset</button>
    </div>
  )
}

export default CounterThree;

// Style
const container = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 8,
	fontSize: "80px",
	width: "500px",
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
