import React, { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';

const ClientArea = () => {

    const { usuario } = useContext(AuthContext);

    return <main className="client-page">
        <article>
            <section>
                <h1>Olá {usuario.name}!</h1>
                <h2>O seu email é: {usuario.email}</h2>
                <p>Você está logado(a) utilizando
                    a autenticação Google com Firebase.
                </p>
                <p>Essa área só pode ser acessada
                    por um usuário autenticado pelo Google.
                </p>
            </section>
        </article>
    </main>
}

export default ClientArea;