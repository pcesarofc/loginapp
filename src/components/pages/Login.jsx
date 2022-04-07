import React from "react";
import LogoImage from '../../assets/Logo.png';
import { firebase, auth } from '../../service/Firebase';
import { useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    let navigate = useNavigate();

    // FUNÇÃO ASSÍNCRONA QUE FAZ O LOGIN NO GOOGLE A PARTIR DE UM POPUP
    const handleOnClickButton = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider)
        navigate("/client")
    }

    return <main className="login-page">
        <article>
            <section>
                <div className="form">
                    <img src={LogoImage} alt="Logo" />
                    <div className="inputs">
                        <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" itemScope="search" />
                        <input type="password" name="password" id="password" placeholder="Senha" />
                        <button className="login"> Login </button>
                    </div>
                    <p>ou</p>
                    <button onClick={handleOnClickButton} className="google-login">
                        <div className="icon">
                            <FaGoogle />
                        </div>
                        Entre com Google
                    </button>
                </div>
            </section>
        </article>
    </main>
}

export default Login;