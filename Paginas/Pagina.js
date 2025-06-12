import React from "react";
import Enlaces from "../Componentes/Enlaces";
import ListaDeVideos from "../Componentes/ListaDeVideos";
import MenuLateral from "../Componentes/MenuLateral";
import BarraNavegacion from "../Componentes/BarraNavegacion";
import img1 from "../IMG/video 1.jpg"
import img2 from "../IMG/video 3.jpg"
import img3 from "../IMG/video 3.0.jpg"
import img4 from "../IMG/video 4.jpg"
import img5 from "../IMG/video 5.jpg"
import img6 from "../IMG/video 6.jpg"
import img7 from "../IMG/video 7.jpg"
import img8 from "../IMG/video 8.jpg"
import img9 from "../IMG/Video 9.jpg"
import logo1 from "../IMG/logo1.png"  
import logo2 from "../IMG/logo2.jpg" 
import logo3 from "../IMG/logo3.jpg" 
import logo4 from "../IMG/logo4.jpg" 
import logo5 from "../IMG/logo5.jpg" 
import logo6 from "../IMG/logo6.jpg" 
import logo7 from "../IMG/logo7.webp" 
import logo8 from "../IMG/logo8.webp" 
import logo9 from "../IMG/logo9.webp" 


export default class PaginaEnlaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            botones: [
                { id: 1, titulo: "Todos" },
                { id: 2, titulo: "Musica" },
                { id: 3, titulo: "Reggaeton" },
                { id: 4, titulo: "Champeta" },
                { id: 5, titulo: "Noticias" },
                { id: 6, titulo: "En Directo" },
                { id: 7, titulo: "Vallenato" }
            ],
          video: [
    { id: 1, img: img1, titulo: "Feid,Sky Rompiendo-CHIMBITA", descripcion: "25 M de visualizaciones", usuario: logo1,ruta:"https://www.youtube.com/watch?v=vxB0amY8BWs" },
    { id: 2, img: img2, titulo: "Caso Misterioso Valeria M", descripcion: "18 M de visualizaciones", usuario: logo2,ruta:"https://www.youtube.com/watch?v=HuY5UU1sseo" },
    { id: 3, img: img3, titulo: "Esperandote Isla Bonita", descripcion: "9.5 M de visualizaciones", usuario: logo3,ruta:"https://www.youtube.com/watch?v=rnsYgknGHVk" },
    { id: 4, img: img4, titulo: "Cali VS Boyacá Chico", descripcion: "30 M de visualizaciones", usuario: logo4,ruta:"https://www.youtube.com/watch?v=gRDg52mdfZ4" },
    { id: 5, img: img5, titulo: "BUBASETA - BABY GIRL", descripcion: "12 M de visualizaciones", usuario: logo5,ruta:"https://www.youtube.com/watch?v=XfL0Y8GiJE4" },
    { id: 6, img: img6, titulo: "Luister La Voz - Las Cartas", descripcion: "3.7 M de visualizaciones", usuario: logo6,ruta:"https://www.youtube.com/watch?v=kDGTioCorTY" },
    { id: 7, img: img7, titulo: "Tu Voz Estéreo - Adolescencia", descripcion: "7.2 M de visualizaciones", usuario: logo7,ruta:"https://www.youtube.com/watch?v=CWq692rqyc0" },
    { id: 8, img: img8, titulo: "Perros Criollos- Tragame Tierra", descripcion: "10 M de visualizaciones", usuario: logo8,ruta:"https://www.youtube.com/watch?v=f6oYMK0atPo" },
    { id: 9, img: img9, titulo: "Call the Police - Blaiz Fayah", descripcion: "22 M de visualizaciones", usuario: logo9,ruta:"https://www.youtube.com/watch?v=uEBHAMdGm0U" }
]

        }
    }

    render() {
        return (
            <div>
                <Enlaces boton={this.state.botones} />
                <ListaDeVideos vid={this.state.video} />
                <MenuLateral />
                <BarraNavegacion />
            </div>
        );
    }
}
