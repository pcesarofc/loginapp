import React from "react";
import Home from './pages/Home';
import Login from './pages/Login';
import ClientArea from './pages/ClientArea';
import ProtectedRouter from "./ProtectedRoutes";
import { Routes, Route } from 'react-router-dom';

const Router = () => {

    return <Routes>
        <Route path="/" element={<Home />} />

        {/* IMPORTAÇÃO DO COMPONENTE ProtectedRouter que retorna o componente login caso o usuário esteja deslogado. */}
        <Route element={<ProtectedRouter />}>
            <Route path="/client" element={<ClientArea />} />
        </Route>
        <Route path="/login" element={<Login />} />
    </Routes>
}

export default Router;