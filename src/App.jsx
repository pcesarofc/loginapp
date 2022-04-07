import React, { useContext, useEffect } from 'react';
import Header from './components/Header';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './components/contexts/AuthContext';
import { auth } from './service/Firebase';
import './sass/_app.scss';

function App() {
  const { setUsuario } = useContext(AuthContext);

  //VERIFICA SE O USUÁRIO ESTÁ LOGADO E SALVA OS DADOS NO CONTEXT USUÁRIO
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {

        setUsuario({
          uid: user.uid,
          photo: user.photoURL,
          name: user.displayName,
          email: user.email
        });

      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
