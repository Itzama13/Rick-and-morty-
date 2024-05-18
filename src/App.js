//import logo from './logo.svg';
import './App.css';
import imagen1 from'../src/Assets/rick-morty.png'
import { useState } from 'react';
import Characters from '../src/Components/Characters'

function App() {
  const [characters, setCharacters] = useState(null)
  const reqApi = async ()  => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    console.log(api);
    const characterApi = await api.json();
    console.log(characterApi);
    console.log(characters);
    setCharacters(characterApi.results);
    console.log(characters);

    //console.log('hola');

  }
  return (
    <div className="App">
      <header className="App-header">
     <h1 className="title">
      Rick and morty
     </h1>
     {characters ?( <Characters characters={characters}></Characters>):(
      <>  <img src= {imagen1} className='img-home' alt='logo'></img>
     <button onClick={reqApi} className='btn-search'>Buscar personaje</button></>

     ) }
    
   
      </header>
    </div>
  );
}

export default App;
