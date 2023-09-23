import ButtonFatec from "../../components/ButtonFatec";
import InputFatec from "../../components/InputFatec";
import style from './Home.module.css'
import Navbar from "../../components/NavBar";
export default function Home() {
 
  return (
    <>
    <div className={style.display}>
      <Navbar />
    </div>

      <p className={style.text}>Entre em contato</p>
      <hr className={style.line}/>
      <InputFatec placeholder='Nome' type='text' value='Nome'/>
      <InputFatec placeholder='E-mail' type='email' value='E-mail'/>
      <InputFatec placeholder='Telefone' type='tel' value='Telefone'/>
      <hr className={style.line}/>
      <ButtonFatec type='button' label='Fatec: Enviar mensagem'/>
       </>
  )
}