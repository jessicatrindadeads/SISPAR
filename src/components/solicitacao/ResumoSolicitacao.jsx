import Check from "../../assets/Solicitacao/check.png";
import styles from "./Solicitacao.module.scss";

function ResumoSolicitacao({ totalFaturado, totalDespesa }) {
  return (
    <div className={styles.divRodape}>
      <div className={styles.inputTotalFaturado}>
        <label htmlFor="totalFaturado">Total Faturado</label>
        <input type="text" id="totalFaturado" value={totalFaturado.toFixed(2)} readOnly />
      </div>

      <div className={styles.inputTotalDespesa}>
        <label htmlFor="totalDespesa">Total Despesa</label>
        <input type="text" id="totalDespesa" value={totalDespesa.toFixed(2)} readOnly />
      </div>

      <button type="button" className={styles.buttonCheck}>
        <img src={Check} alt="" aria-hidden="true" />
        <h2>Enviar para Análise</h2>
      </button>

      <button type="button" className={styles.buttonCancelar}>
        <h2>X Cancelar Solicitação</h2>
      </button>
    </div>
  );
}

export default ResumoSolicitacao;
