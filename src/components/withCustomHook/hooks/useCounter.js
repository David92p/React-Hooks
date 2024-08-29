import {useState} from 'react'

// DI SEGUITO CREIAMO UN HOOK PERSONALIZZATO UTILE PER CONTROLLARE UN COUNTER
// NOTA COME ABBIAMO UTILIZZATO LA KEY use + nomeHook PER CREARE UN CUSTOM HOOK, CONVENZIONE UTILIZZATA PER LA STESURA DEL CODICE
// 
const useCounter = (initialCount, value) => {
  
	// CREIAMO UN COUNTER TRAMITE USESTATE E INIZIALIZIAMOLO CON IL VALORE PASSATO DAL COMPONENTE CHE LO RICHIAMA
	const [count, setCount] = useState(initialCount);

	// DI SEGUITO 3 FUNZIONI CHE GESTISCONO IL COUNTER
	const increment = () => {
		setCount(n => n + value)
	}

	const decrement = () => {
		setCount(n => n - value)
	}

	const reset = () => {
		setCount(initialCount)
	}

  // RITORNIAMO UN ARRAY CON I VALORI INTERESSATI
	return [count, decrement, increment, reset]

}

export default useCounter
