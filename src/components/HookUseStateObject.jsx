import { useState } from 'react'

const HookUseStateObject = () => {

	// Inizializiamo uno stato iniziale con un oggetto
	// useState non aggiorna automaticamente gli oggetti come con le classi - bisogna unire i valori tramite uno spread operator 
  const [name, setName] = useState({firstName: "", lastName: ""})
  
	return (
    <form style={form}>
      <input 
				type="text" 
				// Valore aggiornato dallo stato 
				value={name.firstName} 
				// evento che richiama aggiornamento di stato
				onChange={e => setName({...name, firstName: e.target.value})}
			/>
			<input 
				type="text" 
				// Valore aggiornato dallo stato 
				value={name.lastName} 
				// evento che richiama aggiornamento di stato
				// utiliziamo spread operator di es6 per copiare l'intero oggetto e successivamente aggiorniamo la key che vogliamo
				onChange={e => setName({...name, lastName: e.target.value})}
			/>
			<h2>Your first name is: {name.firstName}</h2>
			<h2>Your last name is: {name.lastName}</h2>
    </form>
  )
}

export default HookUseStateObject

const form = {
	display: "flex",
	flexDirection: "column", 
	gap: 10
}
