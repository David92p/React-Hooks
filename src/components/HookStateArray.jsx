import {useState} from 'react'

const HookStateArray = () => {

  const [items, setItems] = useState([])

	const addNumber = () => {
		// Utiliziamo lo spread operator per copiare tutti gli elementi dello stato prima di aggiornalo 
		// inseriamo un nuovo elemento allo stato una volta copiati gli elementi precedenti 
		setItems([...items, {
			id: items.length,
			value: Math.floor(Math.random() * 10) + 1
		}])	
	}

  return (
		<div style={container}>
			<button style={button} onClick={addNumber}>Add a number</button>
			{/* Inzialmente lo stato è un array vuoto quindi non visualizza alcun elemento  */}
			<ul>
				{
					items.map(item => <li key={item.id}>{item.value}</li>)
				}
			</ul>	
		</div>
  )
}

export default HookStateArray


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