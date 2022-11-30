import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Header from "../components/Header";


export default function Rotas() {
    return (
        <BrowserRouter>

            {/* inserindo classes do Bootstrap para estilização
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/sobre">Sobre</Link></li>
            </ul>
            */}

            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<Sobre />}/>
            </Routes>
        </BrowserRouter>
    )
}