import Check from "../../assets/Solicitacao/check.png";
import PropTypes from "prop-types";
import styles from "./Solicitacao.module.scss";

function ResumoSolicitacao({ totalFaturado, totalDespesa, onEnviar, onCancelar }) {
  return (
    <div className={styles.divRodape}>
      <div className={styles.inputTotalFaturado}>
        <label htmlFor="totalFaturado">Total Faturado</label>
        <input type="text" id="totalFaturado" value={totalFaturado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} readOnly />
      </div>

      <div className={styles.inputTotalDespesa}>
        <label htmlFor="totalDespesa">Total Despesa</label>
        <input type="text" id="totalDespesa" value={totalDespesa.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} readOnly />
      </div>

      <button type="button" className={styles.buttonCheck} onClick={onEnviar}>
        <img src={Check} alt="" aria-hidden="true" />
        <span>Enviar para Análise</span>
      </button>

      <button type="button" className={styles.buttonCancelar} onClick={onCancelar}>
        <span>X Cancelar Solicitação</span>
      </button>
    </div>
  );
}

export default ResumoSolicitacao;

ResumoSolicitacao.propTypes = {
  totalFaturado: PropTypes.number.isRequired,
  totalDespesa: PropTypes.number.isRequired,
  onEnviar: PropTypes.func.isRequired,
  onCancelar: PropTypes.func.isRequired,
};
