import style from './NavBar.module.css'

import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <>
            <div className={style.nav}>
                <Link to='/' className={style.esp}>Home</Link>
                <Link to='/sobre'className={style.esp}>Sobre o desenvolvedor</Link>
                <Link to='/sobre-projeto'className={style.esp}>Sobre o Projeto</Link>
                <Link to='/tarefas'className={style.esp}>Lista de Tarefas</Link>
            </div>
        </>
)}