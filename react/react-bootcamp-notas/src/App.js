import React from 'react';
import './App.css';
import NotasAtuais from './components/notas-atuais';

import "materialize-css/dist/css/materialize.min.css";
   import "materialize-css/dist/js/materialize.min.js";
   
function App() {
  return (
      <header className="App-header">
        <div>
        <NotasAtuais />
        </div>
      </header>
  );
}

export default App;
