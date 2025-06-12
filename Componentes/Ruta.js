import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Pagina from "../Paginas/Pagina"

export default function Ruta(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pagina/>} />
            </Routes>
        </BrowserRouter>
    )
}