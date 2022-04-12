import React, { useContext } from "react";
import Navigator from "./Navigator";
import { AuthContext } from './contexts/AuthContext';
import { firebase } from '../service/Firebase';
import { Link, useNavigate } from "react-router-dom";
import LogoImage from '../assets/Logo.png';
import NoUser from '../assets/no-user.png';

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
            <Link to="/"><img src={LogoImage} className="logo" /></Link>
            <Navigator />
            <img src={usuario.photo} alt="User Photo" className="user-img" />
            <button onClick={Deslogar}>Sair</button>
        </header>

        : <header className="header-page">
            <Link to="/"><img src={LogoImage} className="logo" /></Link>
            <Navigator />
            <img src={NoUser} alt="User Photo" className="user-img" />
            <button onClick={LoginButton}>Login</button>
        </header>
}

export default Header;