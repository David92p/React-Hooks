import { useState, useRef, useEffect } from 'react'

const HookuseRefFirstPart = () => {

	// IMPOSTATIAMO UNO STATO CON USESTATE
	let [number, setNumber] = useState(0)

	// IMPOSTIAMO UNA REF TRAMITE USEREF
	// RESTITUISCE UN OGGETTO CON UNA SOLA PROPRIETA' CURRENT
	const ref = useRef(0)

	const handleClickWithuseState = () => {
		setNumber(n => n + 1)
	}

	const handleClickWithuseRef = () => {
		ref.current = ref.current + 1
		console.log(ref.current)
	}
	
	// UTILIZIAMO UN USEEFFECT E STAMPIAMO UN VALORE CHE DIMOSTRA IL RENDER DEL COMPONENTE 
	// RICORDA! IL CAMBIAMENTO DELLO STATO SETTATO DA USESTATE ESEGUE SEMPRE IL RENDERING DELL'INTERO COMPONENTE
	// QUESTO NON SUCCEDE QUANDO SETTIAMO UN VALORE DI USEREF IN QUANTO NON ESEGUE IL RENDER DEL COMPONENTE
	useEffect(() => {
		console.log("COMPONENT RENDERED")
	})
	
  return (
    <div>
			<div>
				<button onClick={handleClickWithuseState}>
					Click render component!
				</button>
			</div>
			<div>
				<button onClick={handleClickWithuseRef}>
					Click update ref!
				</button>
			</div>
		</div>
  )
}

export default HookuseRefFirstPart
