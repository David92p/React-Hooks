import { useEffect, useReducer } from "react";
import axios from "axios";

// stato iniziale dove gestiamo le fasi di richiesta
const initialState = {
	loading: true,
	error: "",
	post: {}
}

// il reducer gestisce le fasi di richiesta 
// il le actions avranno un type e un payload di dati inseriti
const reducer = (state, action) => {
	switch (action.type) {
		case "success":
			return {
				loading: false, 
				post: action.payload,
				error: ""
			}
		case "error":
			return {
				loading: false, 
				post: {},
				error: "Something went wrong"
			}
		default: 
			return state
	}
}

const DataFetching = () => {

	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		// richiesta 
		axios("https://jsonplaceholder.typicode.com/posts/1")
		.then(response => {
			// in caso di successo il dispatch effettuerà un action di tipo success e i dati passati tramite payload saranno i dati stessi che hanno avuto successo di chiamata
			dispatch({type: "success", payload: response.data})
		})
		// in caso di errore il dispatch viene gestito nel type error del reducer
		.catch(e => {
			console.log(e)
			dispatch({type: "error"})
		})
	}, [])


  return (
    <div>
			{/* Il codice jsx gestisce le fasi in base al suo stato
			La parte di Loading che termina sempre con un success o un error */}
      {
				state.loading ? <h1>Loading ....</h1> : (
					state.error ? (
						<h1>{state.error}</h1>
					) : <h1>{state.post.title}</h1>
				) 
			}
    </div>
  )
}

export default DataFetching
