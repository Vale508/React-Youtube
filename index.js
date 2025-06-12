import React from "react";
import { createRoot } from "react-dom/client";
import Ruta from "./Componentes/Ruta";

const contenedor = document.getElementById('root')
const root = createRoot(contenedor)
root.render(<Ruta/>)