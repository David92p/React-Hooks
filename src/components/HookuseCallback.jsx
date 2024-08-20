import {useState, useCallback } from "react";
import { List } from "./"

const HookuseCallback = () => {
  
	const [number, setNumber] = useState(1)
	const [dark, setDark] = useState(false)

	// LA FUNZIONE E' RACCHIUSA DA USECALLBACK CHE RICEVE UNA FUNZIONE DA MEMORIZZARE E UNA LISTA DI DIPENDENZE (SEGUE LA STESSO CONCETTO DI USEEFFECT)
  // USECALLBACK RESTITUISCE SEMPRE UNA FUNZIONE, COSì DA POTERLA UTILIZZARE NELLA NOSTRA APPLICAZIONE 
	const getItems = useCallback(() => {
		return [number, number + 1, number + 2]
	}, [number])

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

  return (
    <div style={theme}>
      {/* L'INPUT AGGIORNA IL VALORE DI NUMBER CONTENUTO ALL'INTERNO DELLA FUNZIONE GETITEMS
      COSì FACENDO USECALLABACK AGGIORNA LA FUNZIONE CAUSANDO IL CARICAMENTO DEL COMPONENTE LIST */}
			<input 
				type= "number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark(prevDark => !prevDark)}>
				Toggle theme
			</button>
      {/* IL COMPONENTE LIST NON VIENE RICARICATO PERCHE' LA FUNZIONE PASSATA COME PARAMETRO NON VIENE RIPASSATA MA MEMORIZZATA GRAZIE AD USECALLBACK */}
			<List getItems={ getItems } />
    </div>
  )
}

export default HookuseCallback
