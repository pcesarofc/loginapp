import React from "react";
import { Link } from "react-router-dom";

const Navigator = () => {
    
    return <nav className="navigator-page">
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/contact">Contato</Link></li>
            <li><Link to ="/client">Área do Cliente</Link></li>
        </ul>
    </nav>
}

export default Navigator;