import React from 'react';
import { InputCampos } from './presentation/pages/InputCampos';
import './index.css';

function App(): React.ReactElement {
  return (
    <div>
      <div className="container">
        <h3>Calculadora de Tintas</h3>
        <InputCampos />
      </div>
    </div>
  );
}

export default App;
