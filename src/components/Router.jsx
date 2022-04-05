import React, { useContext } from 'react';
import Home from '../components/pages/home/Home';
import LoginPage from '../components/pages/login/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
    

const Router = () => {

    const{ user, setUser} = useContext(AuthContext);

    if(user) {
        return <Routes>
            <Route path = "/" element = {<Home/>} />
        </Routes>
    }
    return <Routes>
        <Route path = "/" element = {<LoginPage/>} />
    </Routes>
   
    
    
}

export default Router;