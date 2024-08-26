# useRef Hook

<div align="center">
    <img src="src/assets/useRef.png" alt="useRef" height="150">
</div>

## useRef è utilizzato per accedere a gli elementi del dom 
## useRef è molto utile soprattutto quando dobbiamo interaggire con i valori del dom senza però causare un nuovo rendering del componente 
## ricorda che useRef è un oggetto, ti basterà accedere alla chiave current per visualizzare i suoi valori

## useRef VS useState

<ul>
    <li>
        useState causa il re-render del commponente quando il suo valore cambia
    </li>
    <li>
        useRef non causa il re-render quando cambiamo il suo valore
    </li>
    <li>
        useRef viene utilizzato quando hai bisogno che il componente ricordi alcune informazioni, abbia accesso a queste e le modifichi senza causa un nuovo render del componente
    </li>
</ul>


