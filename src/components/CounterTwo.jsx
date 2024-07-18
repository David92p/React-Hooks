import { useReducer } from 'react'

// stato iniziale inizializzato come un oggetto
const initialState = {
    firstCounter: 0,
		secondCounter: 10
}

const reducer = (state, action) => {
	// action è ora un oggetto accediamo quindi al type delle action
	switch (action.type) {
		// ogni type effettuerà una determinata azione sullo state, accediamo anche al valore delle action per incrementare o decrementare il valore 
		// è molto importante l'utilizzo dello spread operato di es6 per richiamare lo stato ed effettuare l'azione solamente sul valore indicato
		case "increment":
			return {...state, firstCounter: state.firstCounter + action.value}
		case "decrement":
			return {...state, firstCounter: state.firstCounter - action.value}
		case "increment2":
				return {...state, secondCounter: state.secondCounter + action.value}
		case "decrement2":
				return {...state, secondCounter: state.secondCounter - action.value}
		case "reset":
			return {...state, firstCounter: 0}
		default: 
			return state
	}
}

const CounterTwo = () => {
	// proprio come useState possiamo destrutturare useReducer in due parametri
	// count come valore di stato, dispach che accetta un'azione da eseguire nel reducer
	const [count, dispatch] =  useReducer(reducer, initialState) //richiamiamo useReducer passando due argomenti, il primo è una funzione di reducer e il secondo uno state iniziale

  return (
    <div style={container}>
			<div>
				Counter 1: { count.firstCounter }
			</div>
			<div>
				Counter 2: { count.secondCounter }
			</div>
      {/* il click del bottone richiama la funzione dispatch di useReducer ma questa volta passando un oggetto con proprietà type e value specifico*/}
      <button 
				onClick={() => dispatch({type: "increment", value: 1})} style={button}>increment counter 1
			</button>
      <button
				onClick={() => dispatch({type: "decrement", value: 1})} style={button}>decrement counter 1
			</button>
			<button 
				onClick={() => dispatch({type: "increment", value: 5})} style={button}>increment 5 counter 1
			</button>
      <button
				onClick={() => dispatch({type: "decrement", value: 5})} style={button}>decrement 5 counter 1
			</button>
			<button 
				onClick={() => dispatch({type: "increment2", value: 1})} style={button}>increment counter 2
			</button>
      <button
				onClick={() => dispatch({type: "decrement2", value: 1})} style={button}>decrement counter 2
			</button>
      <button 
				onClick={() => dispatch({type: "reset"})} style={button}>reset
			</button>
    </div>
  )
}

export default CounterTwo;

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
