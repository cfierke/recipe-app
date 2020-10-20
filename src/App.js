import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '13061f51';
  const APP_KEY = 'e5e4c976e417f757b1e6373bb56e3c74';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
