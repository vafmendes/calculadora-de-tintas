import React from "react";
import "../src/styles/style.css";
import InputCampos from "./components/InputCampos";
import PrintCampos from "./components/PrintCampos";

function App() {
  return (
    <div>
      <div className="container">
      <h3>Calculadora de Tintas</h3>
        <InputCampos/>
        <PrintCampos />
    </div>
    </div>
  );
}

export default App;
