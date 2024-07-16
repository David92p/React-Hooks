import { useReducer } from 'react'

// stato iniziale da passare a useReducer
const initialState = 0
// funzione reducer da passare a useReducer
// accetta due valori - lo stato corrente (state) e un istruzione da fare sullo stato (action)
// restituisce sempre un valore 
const reducer = (state, action) => {
	// utiliziamo Switch Statement per analizzare le azione da fare sullo stato
	switch (action) {
		case "increment":
			return state + 1
		case "decrement":
			// in caso di state uguale a 0 ritorniamo 0 altrimenti decrementiamo il valore di 1, questo solo per non avere valori negativi
			return state > 0 ? state - 1 : 0
		case "reset":
			return initialState
		default: 
			// è consigliabile avere sempre un valore di default da restituire per evitare il blocco dell'applicazione
			return state
	}
}

const CounterOne = () => {
	// proprio come useReducer possiamo destrutturare useReducer in due parametri
	// count come valore di stato, dispach che accetta un'azione da eseguire nel reducer
	const [count, dispatch] =  useReducer(reducer, initialState) //richiamiamo useReducer passando due argomenti, il primo è una funzione di reducer e il secondo uno state iniziale

  return (
    <div style={container}>
			Count: { count }
			{/* il click del bottone richiama la funzione dispatch di useReducer passando ad esso un'azione */}
      <button onClick={() => dispatch("increment")} style={button}>increment</button>
      <button onClick={() => dispatch("decrement")} style={button}>decrement</button>
      <button onClick={() => dispatch("reset")} style={button}>reset</button>
    </div>
  )
}

export default CounterOne;

// Style
const container = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 8,
	fontSize: "80px",
	width: "300px",
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
