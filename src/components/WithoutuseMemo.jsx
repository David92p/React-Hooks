import { useState } from "react"

const WithoutuseMemo  = () => {

	const [number, setNumber] = useState(0)
	const [dark, setDark] = useState(false)

	const doubleNumber = slowFunction(number)
	const theme = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: dark ? "#333" : '#FFF',
		color: dark ? "#FFF" : "#333",
		width: "800px",
		heigth: "800px",
		padding: "20px 0",
		gap: 20
	}

  return (
    <div style={theme}>
			{/* OGNI VOLTA CHE CAMBIA IL VALORE DI INPUT VIENE AGGIORNATO IL VALORE DI NUMBER CHE GENERA IL RENDERING CARICANDO NUOVAMENTE LA FUNZIONE DOUBLENUMBER */}
			<input 
				type= "number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			{/* OGNI VOLTA CHE IL BOTTONE CAMBIA LO STATO DARK GENERA IL RENDERING DEL COMPONENTE, GENERANDO UN NUOVO VALORE DOUBLENUMBER
			QUESTO CREA BASSE PRESTAZIONI PER IL SETTAGGIO DELLA DARKMODE IN QUANDO LA FUNZIONE HA BISOGNO DI PIù TEMPO PER IL CARICAMENTO DI NUMBER */}
      <button onClick={() => setDark(prevDark => !prevDark)}>
				Toggle theme
			</button>
			{/* RESTITUIAMO IL VALORE DELLA FUNZIONE DOUBLENUMBER CHE IMPIEGA QUALCHE SECONDO PRIMA DI ESSERE VISUALIZZATO*/}
			<div>
				{ doubleNumber }
			</div>
    </div>
  )
}


// FUNZIONE CHE SIMULA IL CARICAMENTO DI UN API E RESTITUISCE SEMPLICMENTE IL VALORE PASSATO X2
function slowFunction(num){
	console.log("Calling Slow Function")
	for (let i = 0; i <= 1000000000; i++){ /* empty */ }
	return num * 2
}

export default WithoutuseMemo
