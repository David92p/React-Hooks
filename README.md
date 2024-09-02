## useContext Hook

<div align="center">
    <img src="src/assets/context.png" alt="useContext" width="500" height="250">
</div>

### useContext Hook per la scalabilità dei tuoi componenti

<ul
    <li><h3>1. Sai che cos'è la scalabilità dei tuoi componenti?</h3></li>
    <ul>
        <li>
            React adotta il concetto di scalabilità tra componenti, così facendo i componenti possono lavorare tra di loro passandosi le props. 
            Avendo un dato nel componente A possiamo passarlo al componente B attraverso una props, e dal componente B al componente C rispettando sempre i concetti di scalabilità.
        </li>
     </ul>
    <li><h3>2. Perchè useContext</h3></li>
    <ul>
        <li>
            Il passaggio di proprietà tra i componenti risulta particolarmente complicato nel caso di componenti nidificati, avendo una proprietà nel componente AppComponent per poterla passare al componente D dobbiamo farlo attraverso              il componente B, così anche per il componente F, bisognerà trasmettere la proprietà prima al componente C, poi al compoenente E e successivamente al componente F, immagina di avere 100 componenti. Il tutto diventa poco                   chiaro e mantenibile, utiliziamo hook useContext per risolvere questo problema tra familiarità di componenti.
        </li>
     </ul>
    <li><h3>3. Accedi alle proprietà in modo semplice</h3></li>
    <ul>
        <li> 
            React.createContext è il comando per creare un context all'interno del componente principale, dove racchiuderemo i componenti che lo utilizzeranno.
            All'interno del componente principale , racchiudiamo i componenti figli che dovranno avere accesso al context. Questi componenti saranno racchiusi da un provider dove verrà inserito il dato da condividere tramite il value da passare come props del Provider.
            Il provider darà accesso al context a tutti i componenti racchiusi e ai suoi figli, quindi racchiudendo i componenti A B C, anche i componenti D E F avranno accesso al context.
            Utilizza in uno dei componenti il valore attraverso useContext hook
        </li>
     </ul>
</ul>


Documentazione ufficiale:
- [useContext](https://react.dev/reference/react/useContext)
