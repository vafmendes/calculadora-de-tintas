import React from 'react';

interface PrintCamposProps {
  valor: React.ReactNode;
}

export function PrintCampos({ valor }: PrintCamposProps): React.ReactElement {
  return <div>{valor}</div>;
}
