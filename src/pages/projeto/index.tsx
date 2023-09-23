import styles from "./Projeto.module.css";
import NavBar from "../../components/NavBar";
export default function Projeto() {
  return (
    <>
      <div className={styles.display}>
        <NavBar />
      </div>
      <h1 className={styles.text}>Sobre o Projeto</h1>
      <hr />
      <p className={styles.text}>
        O projeto tem por objetivo a criação de uma lista de tarefas<br/> onde
        promove o gerenciamento das tarefas a serem desenvovidas e as<br/> atividades
        realizadas, para isso foi utilizado um banco de dados local do navegador<br/>
        sendo assim é possivel adicionar e remover as tarefas da lista, bem como<br/>
        marcar ou desmarcas as tarefas como feitas ou não.<br/>
      </p>
    </>
  );
}
