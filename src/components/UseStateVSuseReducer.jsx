import { useReducer, useState } from 'react'

const initialState = []
const reducer = (state, action) => {
	switch (action.type) {
		case "addNumber":
			return [...state, Math.floor(Math.random() * 100)]
		case "removeNumber":
			return state.slice(0,state.length - 1)
		default:
			return state
	}
}

const UseStateVSuseReducer = () => {

	// di seguito utiliziamo useState per un dato number 
	const [count, setCount] = useState(0)
	// di seguito uno stato più complesso, un array di numeri viene gestito dal reducer cambiando il suo stato in diversi modi
	const [state, dispatch] = useReducer(reducer, initialState)

	
  return (
    <div style={container}>
      COUNT FROM USESTATE: { count }
			<button style={button} onClick={() => setCount(count + 1)}>Increment from useState</button>
			<div>
				NUMBERS FROM USEREDUCER - { state.map(number => <span key={number}>{number} - </span>) }
			</div>
			{/* Di seguito due bottoni che richiamano il dispatch sul reducer - a seconda della necessità richiamiamo una determinata action type */}
			<button onClick={() => dispatch({type: "addNumber"})} style={button}>Add number at list from useReducer</button>
			{ state.length > 0 ? <button onClick={() => dispatch({type: "removeNumber"})} style={button}>Remove number at list from useReducer</button> :  null}
    </div>
  )
}

export default UseStateVSuseReducer


// Style
const container = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 20,
	fontSize: "20px",
	width: "500px",
	height: "auto",
	backgrounColor: "red",
}


const button = {
	padding: "10px",
	borderRadius: "5px",
	border: "1px solid orange",
	fontSize: "20px",
	backgrounColor: "#f4ef89"
}