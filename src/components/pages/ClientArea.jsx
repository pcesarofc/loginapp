import React, { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';

const ClientArea = () => {

    const{ usuario } = useContext(AuthContext);
    
    return <main>
        <article>
            <section>
                <h1>Olá {usuario.name}</h1>
                <h2>O seu email é: {usuario.email}</h2>
            </section>
        </article>
    </main>
}

export default ClientArea;