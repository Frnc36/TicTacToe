import type { MezoTipus } from "../adatok";

interface MezoProps {
  mezo: MezoTipus;
  index: number;
  mezoKivalaszt: (index: number) => void;
}
//                                      |----|---> egybe kell, mi az a index?
export default function Mezo({ mezo, index, mezoKivalaszt }: MezoProps) {
  return (
    <>
      <div className="mezo" onClick={()=>{mezoKivalaszt(index)}}>
        <p>{mezo.ertek}</p>
      </div>
    </>
  );
}
