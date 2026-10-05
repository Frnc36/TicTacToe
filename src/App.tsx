import { useState } from "react";
import "./App.css";
import JatekTer from "./component/JatekTer";
import { MEZOKLISTA, type MezoTipus } from "./adatok";

function App() {
  const CIM = "TicTacToe";
  const NEV = "Mágori Ferenc Ferdinánd";

  const [lepes, setLepes] = useState<number>(0);
  const [lista, setLista] = useState<MezoTipus[]>(MEZOKLISTA);

  const KOVETKEZOJATEKOS = lepes % 2 === 0 ? "X" : "O";

  // Új játék / Reset függvény
  function ujJatek() {
    setLepes(0);
    setLista(MEZOKLISTA); // Visszaállítjuk az eredeti üres listára
  }

  function gyoztesEllenorzes(aktualisLista: MezoTipus[]): string | null {
    const nyeroKombinaciok = [
      [0, 1, 2], //Sorok
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], //Oszlopok
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], //Átlók
      [2, 4, 6],
    ];

    for (let index = 0; index < nyeroKombinaciok.length; index++) {
      const kombinacio = nyeroKombinaciok[index];
      const [a, b, c] = kombinacio;
      if (
        aktualisLista[a].ertek !== "" &&
        aktualisLista[a].ertek === aktualisLista[b].ertek &&
        aktualisLista[a].ertek === aktualisLista[c].ertek
      ) {
        return aktualisLista[a].ertek;
      }
    }
    return null;
  }

  const GYOZTES = gyoztesEllenorzes(lista);

  function mezoKivalaszt(index: number) {
    if (lista[index].ertek !== "" || GYOZTES !== null) return; //setLepes(lepes + 1);

    const kovetkezoLepes = lepes + 1;
    setLepes(kovetkezoLepes);

    const LISTAMASOLAT = [...lista];
    LISTAMASOLAT[index] = {
      ...LISTAMASOLAT[index],
      ertek: lepes % 2 === 0 ? "X" : "O",
    };
    setLista(LISTAMASOLAT);
  }

  return (
    <>
      <header>
        <h1>{CIM}</h1>
        {GYOZTES ? (
          <p className="gyoztes-kiiras">Győztes: {GYOZTES}</p>
        ) : lepes === 9 ? (
          <p className="gyoztes-kiiras">Döntetlen!</p>
        ) : (
          <p className="kovetkezo-jatekos">
            Következik:{" "}
            <span style={{ color: KOVETKEZOJATEKOS === "X" ? "#007bff" : "#dc3545" }}>
              {KOVETKEZOJATEKOS}
            </span>
          </p>
        )}
      </header>

      <article>
        <JatekTer lista={lista} mezoKivalaszt={mezoKivalaszt} />
      </article>

      <button id="ujJatek-gomb" onClick={ujJatek}>
        Új Játék
      </button>

      <footer>&copy;{NEV}</footer>
    </>
  );
}

export default App;
