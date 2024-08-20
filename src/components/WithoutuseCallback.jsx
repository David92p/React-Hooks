import { useState } from "react"
import { List } from "./"

const WithoutuseCallback = () => {

	// ENTRAMBI GLI STATI AZIONANO IL RENDERING DEL COMPONENTE PER INTERO
	const [number, setNumber] = useState(1)
	const [dark, setDark] = useState(false)

	// QUESTA FUNZIONE VIENE RICREATE OGNI VOLTA CHE IL COMPONENTE APP ESEGUE IL RENDERING
	// OGNI VOLTA CHE CAMBIAMO IL NUMERO NELL'INPUT LA FUNZIONE VIENE RICREATE, PROPRIO PER QUESTO QUANDO VIENE RIPASSATA AL COMPONENTE LIST ABBIAMO UN NUOVO RENDERING DI QUEST'ULTIMO
	// E' COME SE IL COMPONENTE LIST OTTIENE UNA NUOVA FUNZIONE OGNI VOLTA CHE ABBIAMO IL RENDERING 
	const getItems = () => {
		return [number, number + 1, number + 2]
	}

	const theme = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 100,
		backgroundColor: dark ? "#333" : '#FFF',
		color: dark ? "#FFF" : "#333",
		width: "800px",
		padding: "20px 0",
		border: "2px solid red"
	}


	// QUESTO COMPONENTE EFFETTUA IL RENDERING AD OGNI MODIFICA, COMPRESO IL COMPONENTE LIST AL SUO INTERNO
  return (
    <div style={theme}>
			{/* AD OGNI AGGIORNAMENTO DELL'INPUT IL COMPONENTE LIST SI AGGIORNERà, COME CI ASPETTIAMO AVENDO AL SUO INTERNO UNO USEEFFECT */}
			<input 
				type= "number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			{ /* IL BUTTON CAMBIA LO STATO DARK PROVOCANDO IL RENDERING, CAUSANDO PERò ANCHE IL RENDERING DEL COMPONENTE LIST, PERCHè LO USESTATE EFFETTUA IL RENDERING DI TUTTO IL COMPONENTE */ }
			<button onClick={() => setDark(prevDark => !prevDark)}>
				Toggle theme
			</button>
			<List getItems={ getItems } />
    </div>
  )
}

export default WithoutuseCallback

