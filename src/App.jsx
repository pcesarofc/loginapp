import React from 'react';
import Header from './components/layout/Header';
import Router from './components/Router';
import Footer from './components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import './sass/_app.scss';

function App() {
  
  const user = JSON.parse(localStorage.getItem('user'))

  if(user){
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Router/>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );

  
}

export default App;
