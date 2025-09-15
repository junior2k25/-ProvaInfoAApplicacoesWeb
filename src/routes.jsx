import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/inicio";
import Dividir from "./pages/dividir";
import Multiplicar from "./pages/multiplicar";

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/dividir" element={<Dividir />} />
                
                <Route path="/multiplicar" element={ <Multiplicar />}/>
            </Routes>
        </BrowserRouter>
    )

}