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