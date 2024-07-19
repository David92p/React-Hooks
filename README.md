## useContext Hook

<div align="center">
    <img src="src/assets/context.png" alt="useContext" width="500" height="250">
</div>

### useContext Hook per la scalabilità dei tuoi componenti

<ul
    <li><h3>1. Sai che cos'è la scalabilità dei tuoi componenti?</h3></li>
    <ul>
        <li>
            React adotta il concetto di scalabilità tra componenti, così facendo i componenti possono lavorare tra di loro passando props, aggiornare stati e molto altro. 
            Il passaggio di proprietà tra i componenti risulta particolarmente complicato nel caso di componenti nidificati, avendo una proprietà nel componente AppComponent per poterla passare al componente D dobbiamo farlo attraverso              il componente B, così anche per il componente F, bisognerà trasmettere la proprietà prima al componente C, poi al compoenente E e successivamente al componente F, immagina di avere 100 componenti. Il tutto diventa poco                   chiaro e mantenibile, utiliziamo hook useContext per risolvere questo problema tra familiarità di componenti
        </li>
     </ul>
</ul>


Documentazione ufficiale:
- [useReducer](https://react.dev/reference/react/useContext)
