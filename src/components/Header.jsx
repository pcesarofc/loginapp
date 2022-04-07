import React, { useContext } from "react";
import Navigator from "./Navigator";
import { AuthContext } from './contexts/AuthContext';
import { firebase } from '../service/Firebase';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { usuario, setUsuario } = useContext(AuthContext);
    let navigate = useNavigate();

    //DESLOGA O USUÁRIO PELO FIREBASE E SETA O USUARIO COMO NULO NA APLICAÇÃO
    function Deslogar() {
        firebase.auth().signOut().then(() => {
          setUsuario()
        })
        navigate("/")
    }

    function LoginButton() {
        navigate("/login")
    }
    
    //RENDERIZA DE ACORDO COM O ESTADO DO USUÁRIO
    return (usuario) 
    ? <header className="header-page">
        <div className="logo">LOGO</div>
        <Navigator/>
        <img src={usuario.photo} alt="User Photo"/>
        <button onClick={Deslogar}>Sair</button>
    </header>
    
    : <header className="header-page">
        <div className="logo">LOGO</div>
        <Navigator/>
        <img src="" alt="User Photo"/>
        <button onClick={LoginButton}>Login</button>
    </header>
}

export default Header;