import React from "react";
import '../Componentes/CSS/BarraNavegacion.css';
import menuIcon from "../IMG/menu.png";
import logoImg from "../IMG/youtube.jpg";
import searchIcon from "../IMG/logo lupa.webp";
import voiceIcon from "../IMG/voz.png";
import bellIcon from "../IMG/notificacion.png";
import profileImg from "../IMG/perfil.jpg";

function BarraNavegacion() {
    return (
        <div className="barra_contenedor">
            <div className="barra_izquierda">
                <img className="icono_menu" src={menuIcon} alt="Menú"/>
                <img className="logo_youtube" src={logoImg} alt="Logo"/>
            </div>

            <div className="barra_centro">
                <div className="barra_busqueda">
                    <input placeholder="Buscar"/>
                    <button>
                        <img className="icono_buscar" src={searchIcon} alt="Buscar"/>
                    </button>
                </div>
                <img className="icono_voz" src={voiceIcon} alt="Buscar por voz"/>
            </div>

            <div className="barra_derecha">
                <img className="icono_notificacion" src={bellIcon} alt="Notificaciones"/>
                <img className="icono_perfil" src={profileImg} alt="Perfil"/>
            </div>
        </div>
    );
}

export default BarraNavegacion;
