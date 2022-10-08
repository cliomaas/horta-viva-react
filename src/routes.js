import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Perfil from './pages/Perfil';

function RoutesProvider() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/perfil" exact element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesProvider;