import { Link } from 'react-router-dom'
import styles from './Sobre.module.css'
import NavBar from '../../components/NavBar'
import Redes from '../../components/Redes'
export default function Sobre(){
    return(
        <>
    <div>
      <NavBar />
    </div>
    <br/>
            <h1 className={styles.text}>Sobre o desenvolvedor</h1>
            <br/><br/>
            <hr />
            <br/><br/>
            <p className={styles.text}>
                O projeto foi desenvolvido com intuito de aprimorar os conhecimentos do desenvolvedor <br/>
                criando assim um projeto que pudesse ser amplamente utilizado por qualquer pessoa<br/>
                que queira organizar o dia-a-dia podendo listar todos os seus afazeres no dia. <br/>  
            </p>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Redes texto='GitHub' href='https://github.com/devGiovanni95' img='./../../public/github.png'/>
        </>
    )
}