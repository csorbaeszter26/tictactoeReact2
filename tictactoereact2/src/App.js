import logo from './logo.svg';
import './App.css';
import Jatekter from './tictactoe2/Jatekter.js';
import { LISTA } from './tictactoe2/adat.js';
import { useState } from 'react';


function App() {

  //STATE = olyan változó, amelynek az értékét figyeli a react, és ha az megváltozik, akkor frissíti az oldal azon részeit, amely ettől a változótól függ
    //létrehozása: useState hook-al történik => ezegy speciális függvény. amivel egy változóhoz egy függvényt rendelünk. visszatérési értéke mindig lista: változó neve + beállítófüggvény(set..)
    //[valtozonev, beállítófüggvény] = useState(kezdőérték)

    const [lista, setLista]=useState(LISTA)
    const [lepes, setLepes] = useState(0)
  
  function katt(adat){
    //console.log("app: ", adat)
    //LISTA[adat]="X"
   

    //state-nek nem adhatunk értéket csak a beállítófüggvényén keresztül
    //1. készítünk másolatot a változóról
    //2. másolaton elvégezzük a módosításokat
    //3. beállított függvénnyel értékül adjukj az új értéket a változónak
    
    const segedlista=[...lista] //igy nem csak referenciát adunk át hanem készítünk egy tényleges másolatot a memóriában -> amikor visszaadjuk, akkor is kell másolat
    if (lepes%2==0){
      segedlista[adat] = "X"
    }else{
      segedlista[adat]= "O"
    }
    
    
    setLista([...segedlista])

    let sv = lepes
    sv++
    setLepes(sv)
    // setLepes(lepes+1) ezt lehet, (lepes++) nem lehet!!

    console.log(lista)
  }

  return (
    <div className="App">
      <header className="App-header">TicTacToeReact</header>
      <article>
        <h2>Ez a tictactoe</h2>
        <Jatekter LISTA={LISTA} katt={katt}/>
      </article>
      <footer>Csorba Eszter</footer>
    </div>
  );
}

export default App;
