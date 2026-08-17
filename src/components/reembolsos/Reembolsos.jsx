import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png";
import Analise from "../../assets/Dashboard/Análises.png";
import Historico from "../../assets/Dashboard/Solicitar - Histórico.png";
import Analises from "../../assets/Dashboard/N-Análises.png";
import Aprovados from "../../assets/Dashboard/N-Aprovados.png";
import Rejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import Solicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import styles from "./Reembolsos.module.scss";
import NavBar from "../navbar/NavBar.jsx";

function Reembolsos() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  const informarFuncionalidadeDemonstrativa = (funcionalidade) => {
    setMensagem(`${funcionalidade} ainda não está disponível nesta versão demonstrativa.`);
  };

  return (
    <div className={styles.containerReembolsos}>
      <NavBar />

      <div>
        <header>
          <img src={Home} alt="Início" />
          <img src={Seta} alt="" aria-hidden="true" />
          <p>Reembolsos</p>
        </header>

        <main className={styles.mainReembolsos}>
          <div>
            <h1>Sistema de Reembolsos</h1>
          </div>

          <div>
            <p className={styles.pReembolsos}>
              Solicite novos pedidos de reembolso, visualize solicitações em análise
              e todo o histórico.
            </p>
          </div>

          {mensagem && (
            <p className={styles.mensagemDashboard} role="status" aria-live="polite">
              {mensagem}
            </p>
          )}

          <section className={styles.containerCards}>
            <button
              type="button"
              className={styles.cardAcao}
              onClick={() => navigate("/solicitacao")}
            >
              <img src={Solicitar} alt="" aria-hidden="true" />
              <h2>Solicitar Reembolso</h2>
            </button>

            <button
              type="button"
              className={styles.cardAcao}
              onClick={() => informarFuncionalidadeDemonstrativa("A consulta de análises")}
            >
              <img src={Analise} alt="" aria-hidden="true" />
              <h2>Verificar análises</h2>
            </button>

            <button
              type="button"
              className={styles.cardAcao}
              onClick={() => informarFuncionalidadeDemonstrativa("O histórico")}
            >
              <img src={Historico} alt="" aria-hidden="true" />
              <h2>Histórico</h2>
            </button>
          </section>

          <section className={styles.containerStatus}>
            <div className={styles.divImagens}>
              <img className={styles.imgSolicitados} src={Solicitados} alt="Quantidade solicitada" />
              <h3>182</h3>
              <p>Solicitados</p>
            </div>

            <div className={styles.divImagens}>
              <img className={styles.imgAnalises} src={Analises} alt="Quantidade de análises" />
              <h3>74</h3>
              <p>Em análise</p>
            </div>

            <div className={styles.divImagens}>
              <img className={styles.imgAprovados} src={Aprovados} alt="Quantidade de aprovados" />
              <h3>195</h3>
              <p>Aprovados</p>
            </div>

            <div className={styles.divImagens}>
              <img className={styles.imgRejeitados} src={Rejeitados} alt="Quantidade de rejeitados" />
              <h3>41</h3>
              <p>Rejeitados</p>
            </div>
          </section>

          <div className={styles.divSistema}>
            <img src={Sistema} alt="Confirmação de sistema atualizado" />
            <h2>Sistema atualizado.</h2>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Reembolsos;
