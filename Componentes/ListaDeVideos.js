import React from "react";
import VideoCard from "./VideoCard";
import '../Componentes/CSS/Videos.css';

function ListaDeVideos(props) {
    return (
        <div className="videos_contenedor">
            {props.vid.map((videoData) => {
                return(
                <VideoCard
                    img={videoData.img}
                    titulo={videoData.titulo}
                    descripcion={videoData.descripcion}
                    usuario={videoData.usuario}
                    ruta={videoData.ruta}
                />
            )
        })
            }
        </div>
    )
}

export default ListaDeVideos;
