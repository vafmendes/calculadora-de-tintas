import React, { useState } from "react";
import "../styles/style.css";
import PrintCampos from "./PrintCampos";
import Resultado from "./Resultado";

function InputCampos() {
  const [paredes, setParedes] = useState([]);
  const [completo, setCompleto] = useState(false);



  const adicionarValores = () => {
    const novaParede = {
      largura: parseFloat(prompt(`Informe a largura da parede ${paredes.length + 1}:\nObs: Coloque ' . ' (ponto) ao invés de ' , ' (vírgula) `)),
      altura: parseFloat(prompt(`Informe a altura da parede ${paredes.length + 1}\nOBS: Coloque ' . ' (ponto) ao invés de ' , ' (vírgula):`)),
      portas: parseInt(prompt(`Informe a quantidade de portas da parede ${paredes.length + 1}:`)),
      janelas: parseInt(prompt(`Informe a quantidade de janelas da parede ${paredes.length + 1}:`)),
    };

    if ((!isNaN(novaParede.largura) && !isNaN(novaParede.altura))  && (!isNaN(novaParede.portas) && !isNaN(novaParede.janelas)) ) { 
      if((novaParede.portas > 0) && (novaParede.altura <= 2.20) ){
        alert("A altura das paredes que possuem porta deve possuir pelo menos 30 centímetros de distância com relação a altura da porta");
        return;
      }else if((novaParede.altura * novaParede.largura < 1) || (novaParede.altura * novaParede.largura > 50)){
        alert("Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados");
        setParedes([]);
      }else{
        setParedes([...paredes, novaParede]);
        alert(`Parede ${paredes.length + 1} adicionada`);
      }
    } else {
      alert("Os valores não podem ser nulos");
      setParedes([]);
    }

    if (paredes.length === 3) {
          setCompleto(true);
    }

  }

  const quantPortas = paredes.map((parede) => Number(parede.portas));
 
  const quantJanelas = paredes.map((parede) => Number(parede.janelas));
  
  const areaPortas = quantPortas.reduce((porta, cur) =>  porta + cur * 2.4, 0).toFixed(2);
  
  const areaJanelas = quantJanelas.reduce((janela, cur) => janela + cur * 1.52, 1).toFixed(2);

  const quantLargAlt = paredes.map((parede) =>{ return Number(parede.largura * parede.altura)} );

  const areaTotalParedes = quantLargAlt.reduce((porta, cur) =>  porta + cur, 0);

  if(areaPortas + areaJanelas > areaTotalParedes / 2){
    alert("O total de área das portas e janelas não poderá ocupar 50% da área de parede");
    setCompleto(false);
    setParedes([]);

  }

  const totalPortas = quantPortas.reduce((porta, cur) =>  porta + cur, 0);
  
  const totalJanelas = quantJanelas.reduce((janela, cur) => janela + cur, 0);
  

  const imprimirResultado = ()=>{
      let descontaArea = areaTotalParedes - areaJanelas - areaPortas;
      let litrosTinta = Math.ceil(descontaArea / 5);
  
      if (litrosTinta <= 0) {
        return (<p>Nenhuma tinta é necessária.</p>);
      }
  
      if (litrosTinta <= 0.5) {
        return (<p>Compre uma lata de 0,5 litros de tinta.</p>);
      }
  
      if (litrosTinta <= 2.5) {
        return (<p>Compre uma lata de 2,5 litros de tinta.</p>);
      }
  
      if (litrosTinta <= 3.6) {
        return (<p>Compre uma lata de 3,6 litros de tinta.</p>);
      }
  
      let latasNecessarias = Math.ceil(litrosTinta / 18);
      console.log(latasNecessarias);
        if(latasNecessarias === 1){
          return (<p> Compre {latasNecessarias} lata de 18 litros de tinta.</p>);
        }else{
          return (<p> Compre {latasNecessarias} latas de 18 litros de tinta.</p>);
        }


  }

  function imprimirMedidas() {
    return (
      <div style={{ margin: "10px 30px" }}>
        {paredes.map((parede, index) => (
          <p key={index} style={{marginBottom:"10px", paddingRight:"35px"}}>
            Parede {index + 1}: Largura - {parede.largura.toFixed(2)} | Altura - {parede.altura.toFixed(2)} | Portas: {parede.portas} | Janelas: {parede.janelas} | Área: Área: {(parede.largura * parede.altura).length >= 5  ? (parede.largura * parede.altura).toFixed(2) : parede.largura * parede.altura}m²
          </p>
        ))}
        <div style={{ marginTop: "10px" }}>
          <p>Total de portas: {totalPortas}  e Total de janelas: {totalJanelas}</p>
          <p>Área total: {areaTotalParedes.toFixed(2)} m²</p>
        </div>
      </div>
    );
  }

  function refazerCalculo(){
    setCompleto(false);
    setParedes([]);
    return adicionarValores;
  }


  return (

    <div style={{ display: 'block' }}>
      <p>Clique no botão abaixo e informe a medida de cada parede de sua sala para calcular a quantidade de tinta necessária para pintar. Incluindo quantidade de janelas e portas que cada parede possui.</p>
      {(!completo) && paredes[0] && <h5>Para adicionar outra parede clique novamente</h5>}
      {!completo && (<button onClick={adicionarValores}>+ Adicionar parede</button>)}
      {completo &&<PrintCampos valor={imprimirMedidas()}/>}
      {completo &&<Resultado enviarValor= {imprimirResultado()} />}
      {completo && <h5>Caso deseje fazer um novo cálculo, clique em 'Reiniciar'</h5>}
      {completo && <button onClick={refazerCalculo}>Reiniciar</button>}
    </div>

  );


}

export default InputCampos;