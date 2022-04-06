import React from 'react';
import Home from '../components/pages/home/Home';
import LoginPage from '../components/pages/login/LoginPage';
import { Routes, Route } from 'react-router-dom';
    

const Router = () => {

    const user = JSON.parse(localStorage.getItem('user'))

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