import { useState } from "react";
import "./App.css";
import JatekTer from "./component/JatekTer";
import { MEZOKLISTA, type MezoTipus } from "./adatok";

function App() {
  const CIM = "TicTacToe";
  const NEV = "Mágori Ferenc Ferdinánd";

  const [lepes, setLepes] = useState<number>(0);
  const [lista, setLista] = useState<MezoTipus[]>(MEZOKLISTA);

  function mezoKivalaszt(index: number) {
    if (lista[index].ertek !== "") return;
    setLepes(lepes + 1);
    const listaMasolat = [...lista];
    listaMasolat[index] = {
      ...listaMasolat[index],
      ertek: lepes % 2 === 0 ? "X" : "O",
    };
    setLista(listaMasolat);
  }

  return (
    <>
      <header>
        <h1>{CIM}</h1>
      </header>
      <article>
        <JatekTer lista={lista} mezoKivalaszt={mezoKivalaszt} />
      </article>
      <footer>&copy;{NEV}</footer>
    </>
  );
}

export default App;
