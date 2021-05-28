import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from 'axios';
import useSelect from './hooks/useSelect';
import ListadoNoticias from './components/ListadoNoticas';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useSelect([]);

    //864c1a483e5f4c5ea892d1e124765bcf
    
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=864c1a483e5f4c5ea892d1e124765bcf`;

      const respuesta = await axios.get(url);

      guardarNoticias(respuesta.data.articles);
    }
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>
      
    </Fragment>
  );
}

export default App;
