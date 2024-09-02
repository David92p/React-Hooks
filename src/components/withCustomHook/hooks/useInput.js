import { useState } from 'react'

const useInput = (initialValue) => {

	// UTILIZIAMO USESTATE PER CONTROLLARE IL VALORE DELL'INPUT
	const [value, setValue] = useState(initialValue)

	// LA FUNZIONE EFFETTUA IL RESET DEL VALORE A INITIAL VALUE
	const reset = () => {
		setValue(initialValue)
	}

	// CREIAMO UN OGGETTO CON IL VALORE DELL'INPUT, E UNA FUNZIONE ONCHANGE CHE SETTA IL VALORE SULL'EVENTO PASSATO 
	const bind = {
		value,
		onChange: (e) => {
			setValue(e.target.value)
		}
	}

	// UN CUSTOM HOOK NON RESTUISCE JSX MA SEMPRE UNA LOGICA, CHE DESTRUTTURIAMO QUANDO LO RICHIAMIAMO
	return [value, bind, reset] 
}

export default useInput
