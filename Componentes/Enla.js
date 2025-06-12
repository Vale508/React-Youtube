import React from "react";
import './CSS/Enlaces.css'

export default class Botoncito extends React.Component{
    render(){
        const {titulo}=this.props
        return(
            <div className="caja">
                <p className="btn">{titulo}</p>
            </div>
        )
    }
}