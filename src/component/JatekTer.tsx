import type { MezoTipus } from "../adatok";
import Mezo from "./Mezo";

interface JatekTerProps {
  lista: MezoTipus[];
  mezoKivalaszt: (index: number) => void;
}

export default function JatekTer({ lista, mezoKivalaszt }: JatekTerProps) {
  return (
    <>
      <div className="jatek-ter">
        {lista.map((e, i) => {
          return (
            <Mezo mezo={e} index={i} key={i} mezoKivalaszt={mezoKivalaszt} />
          );
        })}
      </div>
    </>
  );
}
