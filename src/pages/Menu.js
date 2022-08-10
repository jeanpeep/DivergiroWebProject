import React from "react";
import QuienesSomos from "../components/QuienesSomos";
import VistaPrincipal from "../components/VistaPrincipal";
import PreguntasF from "../components/PreguntasF"
export default function Menu() {
  return (
      <div>
        <VistaPrincipal/>
        <QuienesSomos />
        <PreguntasF />
      </div>
  );
}
