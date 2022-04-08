import React, { useContext } from "react";
import ClientArea from "./pages/ClientArea";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";


//O PROTECTED ROUTER RETORNA O COMPONENTE CLIENTAREA CASO O USUÁRIO DO CONTEXT ESTEJA LOGADO, 
//SE NÃO ESTIVER ELE NAVEGA ATÉ O LOGIN

const ProtectedRouter = () => {
    const { usuario } = useContext(AuthContext);

    return (usuario) ? <ClientArea /> : <Navigate to="/login" />
}

export default ProtectedRouter;