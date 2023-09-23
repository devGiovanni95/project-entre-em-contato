import { Link } from "react-router-dom";
import './NotFounder.module.css'

export default function NotFound(){
    return( 
        <>
        <div>
            <h1>Página não encontrada</h1>
            <p>A URL digitada não foi encontrada</p>
            <hr />
            <Link to='/'>Voltar para a home</Link>
        </div>
        </>
    )
}