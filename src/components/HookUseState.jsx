import {useState} from 'react'

const HookUseState = () => {

	// inizializiamo uno stato del componente richiamando useState
	// destrutturiamo e inizializiamo un valore iniziale e fnc per aggiornare lo stato - inizializiamo un valore predefinito 0
	const [count, setCount] = useState(0)


	// La funzione incrementa di 5 lo stato e per farlo ha bisogno di leggere il valore precedente
	const incrementFive = () => {
		setCount(prevCount => prevCount + 5)
	}

  return (
    <div style={container}>
			<p>{ count }</p>
      <button style={button} onClick={() => setCount(count + 1)}>Increment</button>
			<button style={button} onClick={() => setCount(0)}>Reset</button>
			<button style={button} onClick={() => setCount(count - 1)}>Decrement</button>
			<button style={button} onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookUseState


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
