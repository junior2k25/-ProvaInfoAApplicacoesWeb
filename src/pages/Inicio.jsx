import { useState } from "react";
import { Link } from "react-router-dom";
import './inicio.scss'

export default function Inicio() {
    
return(
    <body>
        
    
    <div className="titulo">
        <h1>sergio Ramalho Macedo Junior</h1>
        <h2>info-A</h2>
        <Link to="/dividir">dividir</Link>
<br />

        <Link to='/multiplicar'>multiplicar</Link>
    </div>
    </body>
)

}