import React from 'react';
import './sass/_app.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;