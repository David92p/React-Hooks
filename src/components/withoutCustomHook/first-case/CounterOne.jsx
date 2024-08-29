import { useState } from 'react'

const CounterOne = () => {
	// AGGIORNIAMO UNO STATO TRAMITE USESTATE
	const [count, setCount] = useState(0);

	// FUNZIONI CHE CONTROLLANO IL NOSTRO STATO
	const increment = () => {
		setCount(n => n + 1)
	}

	const decrement = () => {
		setCount(n => n - 1)
	}

	const reset = () => {
		setCount(0)
	}

  return (
    <div>
      <h2>Count = { count }</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
