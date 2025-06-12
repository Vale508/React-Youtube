import React from "react";
import Botoncito from "./Enla";
import '../Componentes/CSS/Enlaces.css'

function Enlaces(props){
    return(
        <div className="contenedor">
            {props.boton.map((cosa)=>{
                return(
                    <Botoncito
                        titulo={cosa.titulo}
                    />
                )
            })
            }
        </div>
    )
}

export default Enlaces