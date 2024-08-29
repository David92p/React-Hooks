import useCounter from '../hooks/useCounter';

const CounterFour = () => {
			// RICHIAMIAMO QUI' IL NOSTRO HOOK CREATO IN PRECEDENZA PER SFRUTTARE LA SUA LOGICA SENZA RICREARLA
		// DESTRUTTURIAMO I SUOI VALORI COME SE DOVESSIMO USARE UN HOOK BUILT-IN
    const [ count, decrement, increment, reset ] = useCounter(10, 10) // PASSIAMO AL NOSTRO HOOK I VALORI RICHIESTI 

		return (
			<div>
				<h2>Count = { count }</h2>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
			</div>
  )
}

export default CounterFour
