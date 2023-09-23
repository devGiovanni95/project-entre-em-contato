import styles from "./Tarefas.module.css";
import NavBar from "../../components/NavBar";
export default function Tarefas() {
  return (
    <>
      <div className={styles.display}>
        <NavBar />
      </div>
      <h1 className={styles.text}>Lista de Tarefas</h1>
      <hr />
      <p className={styles.text1}>
        <ul>
          <li><input type="checkbox" />Tarefa 1</li>
          <li><input type="checkbox" />Tarefa 2</li>
          <li><input type="checkbox" />Tarefa 3</li>
          <li><input type="checkbox" />Tarefa 4</li>
        </ul>
      </p>
    </>
  );
}
