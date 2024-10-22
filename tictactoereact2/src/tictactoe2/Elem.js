import { useContext } from "react";
import { KattContext } from "../context/kattContext";

export default function Elem(props) {
  const { katt } = useContext(KattContext);

  return (
    <div className="mezo card col-lg-4" onClick={() =>  katt(props.i)}    >
     {props.jel}
    </div>
  );
}
