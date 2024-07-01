import {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching2 = () => {
	// stato post singolo settato in useEffect
	const [post, setPost] = useState({})
	// stato id input, settato con tramite onChange
	const [id, setId] = useState(1)
	// stato da passare alla chiamata api tramite useEffect
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	// richiesta api tramite axios 
	useEffect(() => {
		// richiesta api tramite un parametro aggiornato dall'utente
		axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
		.then(res => {
			setPost(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	}, [idFromButtonClick]) // il componente aggiorno la stato del post dipendentemente dal valore passato nel button 

  return (
    <div style={container}>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
			<button style={button} onClick={handleClick}>Click</button>
			<div>{post.title}</div>
    </div>
  )
}

export default DataFetching2


// Style
const container = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 8,
	fontSize: "20px",
	width: "300px",
	height: "auto",
	backgrounColor: "red",
}


const button = {
	padding: "10px",
	borderRadius: "5px",
	border: "1px solid orange",
	fontSize: "20px",
	backgrounColor: "#f4ef89"
}

