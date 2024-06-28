import {useState, useEffect} from 'react'

const HookUseEffect = () => {

	const [count, setCount] = useState(0)
	const [name, setName] = useState("")
	const [casualNumber, setCasualNumber] = useState(10)

	// useEffect hook è una funzione che riceve una cb da eseguire ad ogni rendering del componente
	// l'aggiornamento del count attraverso useState provocherà un re-rendering del componente e useEffect eseguira nuovamente la funzione al suo interno
	// useEffect può avere un secondo parametro array opzionale - include gli stati in cui prestare attenzioni, se lasciata vuota useEffect eseguirà la funzione solomanete al primo rendering
	// il secondo parametro ci aiuta a contrallare la funzione passata che viene eseguida ad ogni comando all'interno del componente che effettua il re-rendering (useState rieffettua il re-rendering) 
	useEffect(() => {
		console.log(`useEffect - Aggiornato stato count: ${count}`)
		// console.log(`Aggiornato stato name: ${name}`)
	}, [count]) // passiamo count come parametro così facendo la funzione verrà eseguita seguendo solo lo stato count, quando modificheremo lo stato name useEffect non verrà eseguito

	// useEffect in questo caso richiama la funzione al suo interno solo al primo rendering specificando come secondo parametro un array vuoto senza dipendenze
	useEffect(() => {
		setCasualNumber(Math.floor(Math.random() * 100) + 1)
	}, [])

  return (
    <div style={container}>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
			<p>{ count }</p>
      <button onClick={() => setCount(count + 1)} style={button}>Click</button>
			<span>{casualNumber}</span>
    </div>
  )
}

export default HookUseEffect

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
