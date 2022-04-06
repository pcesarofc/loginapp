import React, { useContext, useEffect } from "react";


const Home = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    function Deslogar(){
        localStorage.clear();
        document.location.reload();
    }

    return <article>
        <section>
            <div className="home">HOMEPAGE</div>
            <button onClick={Deslogar}>Sair</button>
            <p>Olá {user.name}.</p>
            <img src={user.photo} alt="User Photo"/>
        </section>
    </article>
}

export default Home;