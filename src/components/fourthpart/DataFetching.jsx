import {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {
	const [posts, setPosts] = useState([])

	// richiesta api tramite axios 
	useEffect(() => {
		// promise
		axios.get("https://jsonplaceholder.typicode.com/posts")
		.then(res => {
			setPosts(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	}, []) // specifichiamo un array vuoto - al primo rendering eseguiamo la chiamata api e settiamo lo stato 

  return (
    <div style={container}>
			<ul>
				{
					// mappiamo la lista dello stato in un elenco 
					posts.map(post => <li key={post.id}>{post.title}</li>)
				}
			</ul>
    </div>
  )
}

export default DataFetching


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

