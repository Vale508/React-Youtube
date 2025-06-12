import React from "react";
import '../Componentes/CSS/MenuLateral.css';
import iconoInicio from "../IMG/logo inicio.png";
import iconoShorts from "../IMG/logo shots.png";
import iconoSuscripciones from "../IMG/logo suscrip.webp";
import iconoHistorial from "../IMG/logo historial.png";
import iconoPlaylist from "../IMG/logo reproducc.png";
import iconoVideos from "../IMG/logo mis videos.png"
import iconoVerDespues from "../IMG/logo mas tarde.png";
import iconoMeGusta from "../IMG/logo manito.png";
import iconoPaulette from "../IMG/paulette.webp";
import iconoSentirVallenato from "../IMG/vallenato.jpg";
import iconoKarolG from "../IMG/karolg.jpg";

function MenuLateral() {
    return (
        <div className="menu_contenedor">
            <div className="menu_seccion_superior">

                <div className="menu_item">
                    <img className="menu_icono" src={iconoInicio} alt="Inicio" />
                    <p className="menu_titulo">Inicio</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoShorts} alt="Shorts" />
                    <p className="menu_titulo">Shorts</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoSuscripciones} alt="Suscripciones" />
                    <p className="menu_titulo">Suscripciones</p>
                </div>

            </div>

            <hr />

            <div className="menu_seccion_inferior">
                <h3>Tu </h3>
                <div className="menu_item">
                    <img className="menu_icono" src={iconoHistorial} alt="Historial" />
                    <p className="menu_titulo">Historial</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoPlaylist} alt="Playlist" />
                    <p className="menu_titulo">Listas de reproducción</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoVideos} alt="Tus videos" />
                    <p className="menu_titulo">Mis videos</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoVerDespues} alt="Ver más tarde" />
                    <p className="menu_titulo">Ver más tarde</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoMeGusta} alt="Me gusta" />
                    <p className="menu_titulo">Videos que me gustan</p>
                </div>

            </div>

            
            <hr />

            <div className="menu_seccion_inferior">
                <h3>Suscripciones</h3>
                <div className="menu_item">
                    <img className="menu_icono" src={iconoPaulette} alt="Paulette" />
                    <p className="menu_titulo">Paulette</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoSentirVallenato} alt="Sentir Vallenato" />
                    <p className="menu_titulo">Sentir Vallenato</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoKarolG} alt="Karol G" />
                    <p className="menu_titulo">Karol G</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoVerDespues} alt="Ver más tarde" />
                    <p className="menu_titulo">Ver más tarde</p>
                </div>

                <div className="menu_item">
                    <img className="menu_icono" src={iconoMeGusta} alt="Me gusta" />
                    <p className="menu_titulo">Me gusta</p>
                </div>

            </div>
        </div>
        
    );
}

export default MenuLateral;
