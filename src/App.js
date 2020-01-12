import React from "react";
import "./styles.css";
import Chart from "./charts";
import App1 from "./sidenav";


export default function App() {
  return (
    <>

    <div className="App">
      <App1 />
      <h1>Primeira Página de Gráficos</h1>
      <h2>SubTítulo2</h2>
      
      <Chart />
    </div>

    </>
  );
}
