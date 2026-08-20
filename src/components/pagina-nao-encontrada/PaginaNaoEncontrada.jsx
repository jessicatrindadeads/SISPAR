import { useNavigate } from "react-router-dom";
import styles from "./PaginaNaoEncontrada.module.scss";

function PaginaNaoEncontrada() {
  const navigate = useNavigate();

  return (
    <main className={styles.paginaNaoEncontrada}>
      <p>Erro 404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço informado não existe no portal demonstrativo do SISPAR.</p>
      <button type="button" onClick={() => navigate("/")}>Voltar ao login</button>
    </main>
  );
}

export default PaginaNaoEncontrada;
