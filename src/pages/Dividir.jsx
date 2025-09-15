import { useState } from "react";
import { Link } from "react-router-dom";
import './dividir.scss'

export default function Dividir() {
const [Numero, setNumero] = useState(0);
const [Num1, setNum1] = useState(0);
const [Num2, setNum2] = useState(0);

function Calcular(){
    let resultado = Number(Num1) / Number(Num2)
    setNumero(resultado)
}



    return(
        <div className="form">
            <h1>informe os valores de dividir nos campos abaixo👇</h1>
            <div className="card">
            <label>Numero 1</label>
            <input value={Num1} onChange={(e) => setNum1(e.target.value)}/>
            <br />
            <label>Numero 2</label>
            <input value={Num2} onChange={(e) => setNum2(e.target.value)}/>
            </div>
            <br />
            <button onClick={Calcular}>=</button>
<p>Resultado {Numero}</p>
<Link to='/'>volta</Link>

        </div>
    )
}