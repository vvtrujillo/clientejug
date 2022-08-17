import logo from './logo.svg';
import './App.css';
import FormJugador from './Componentes/FormJugador';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function App() {

  const[data, setData] = useState([]);

  const agregar = (obj) => {
    axios.post('http://localhost:8000/api/v1/jugadores', obj)
      .then(respuesta => {
        setData([...data, respuesta.datos.data])
      });
  }


  return (
    <React.Fragment>
      <FormJugador agregarFn={agregar}></FormJugador>
    </React.Fragment>    
  );
}

export default App;
