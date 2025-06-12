import React from "react";
import '../Componentes/CSS/Videos.css';
import {Link} from 'react-router-dom';

export default class VideoCard extends React.Component {
    render() {
        const { img, titulo, usuario, descripcion, ruta} = this.props;
        return (
            <div className="video_caja">
                <Link to={ruta}>
                <img className="video_img" src={img} alt="" />
                <div className="video_info_contenedor">
                    <img className="video_logo" src={usuario} alt="" />
                    <div className="video_info_caja">
                        <p className="video_titulo">{titulo}</p>
                        <p className="video_usuario">{descripcion}</p>
                    </div>
                </div>
                </Link>
            </div>
        );
    }
}
