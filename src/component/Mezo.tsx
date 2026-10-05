import "./mezo.css";
import type { MezoTipus } from "../adatok";

interface MezoProps {
  mezo: MezoTipus;
  index: number;
  mezoKivalaszt: (index: number) => void;
}
//                                      |----|---> egybe kell, mi az a index?
export default function Mezo({ mezo, index, mezoKivalaszt }: MezoProps) {
  const BETUTIPUS =
    mezo.ertek === "X" ? "x-betu" : mezo.ertek === "O" ? "o-betu" : "";
  return (
    <>
      <div
        className="mezo"
        onClick={() => {
          mezoKivalaszt(index);
        }}
      >
        {/*         <p style={{ color: mezo.ertek === "X" ? "cyan" : "red" }}>
          {mezo.ertek}
        </p> */}
        <p className={BETUTIPUS}>{mezo.ertek}</p>
      </div>
    </>
  );
}
