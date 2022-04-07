import React from "react";
import { firebase, auth } from '../../service/Firebase';

const Login = () => {

    // FUNÇÃO ASSÍNCRONA QUE FAZ O LOGIN NO GOOGLE A PARTIR DE UM POPUP
    const handleOnClickButton = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    }

    return <main>
        <article>
            <section>
                <button onClick={handleOnClickButton}> Login com Google</button>
            </section>
        </article>
    </main>
}

export default Login;