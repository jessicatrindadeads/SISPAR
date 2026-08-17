import Deletar from "../../assets/Solicitacao/deletar.png";
import styles from "./Solicitacao.module.scss";

function FormularioSolicitacao({ formulario, onChange, onSubmit, onLimpar }) {
  return (
    <form className={styles.formSolicitacao} onSubmit={onSubmit}>
      <div className={styles.grupo1}>
        <div className={styles.inputNome}>
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" id="nome" name="nome" value={formulario.nome} onChange={onChange} required />
        </div>

        <div className={styles.inputEmpresa}>
          <label htmlFor="empresa">Empresa</label>
          <input type="text" id="empresa" name="empresa" value={formulario.empresa} onChange={onChange} required />
        </div>

        <div className={styles.inputPrestacao}>
          <label htmlFor="prestacao">Nº Prest. Contas</label>
          <input type="number" id="prestacao" name="prestacao" value={formulario.prestacao} onChange={onChange} />
        </div>

        <div className={styles.inputMotivo}>
          <label htmlFor="motivo">Descrição / Motivo do Reembolso</label>
          <textarea id="motivo" name="motivo" value={formulario.motivo} onChange={onChange} />
        </div>
      </div>

      <div className={styles.barraVertical}></div>

      <div className={styles.grupo2}>
        <div className={styles.inputData}>
          <label htmlFor="data">Data</label>
          <input type="date" id="data" name="data" value={formulario.data} onChange={onChange} required />
        </div>

        <div className={styles.despesas}>
          <label htmlFor="tipoDespesa">Tipo de Despesa</label>
          <select name="tipoDespesa" id="tipoDespesa" value={formulario.tipoDespesa} onChange={onChange} required>
            <option value="" disabled>Selecionar</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Combustível">Combustível</option>
            <option value="Condução">Condução</option>
            <option value="Estacionamento">Estacionamento</option>
            <option value="Viagem administrativa">Viagem administrativa</option>
            <option value="Viagem operacional">Viagem operacional</option>
            <option value="Eventos de representação">Eventos de representação</option>
          </select>
        </div>

        <div className={styles.custo}>
          <label htmlFor="centroCusto">Centro de custo</label>
          <select name="centroCusto" id="centroCusto" value={formulario.centroCusto} onChange={onChange} required>
            <option value="" disabled>Selecionar</option>
            <option value="1100109002 - FIN CONTROLES INTERNOS MTZ">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
            <option value="1100110002 - FIN VICE-PRESIDÊNCIA FINANÇAS MTZ">1100110002 - FIN VICE-PRESIDÊNCIA FINANÇAS MTZ</option>
            <option value="1100110102 - FIN CONTABILIDADE MTZ">1100110102 - FIN CONTABILIDADE MTZ</option>
          </select>
        </div>

        <div className={styles.inputOrdem}>
          <label htmlFor="ordemInterna">Ord. Int.</label>
          <input type="number" id="ordemInterna" name="ordemInterna" value={formulario.ordemInterna} onChange={onChange} />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="divisao">Div.</label>
          <input type="number" id="divisao" name="divisao" value={formulario.divisao} onChange={onChange} />
        </div>

        <div className={styles.inputPep}>
          <label htmlFor="pep">PEP</label>
          <input type="number" id="pep" name="pep" value={formulario.pep} onChange={onChange} />
        </div>

        <div className={styles.inputMoeda}>
          <label htmlFor="moeda">Moeda</label>
          <input type="text" id="moeda" name="moeda" value={formulario.moeda} onChange={onChange} />
        </div>

        <div className={styles.inputDistanciaKm}>
          <label htmlFor="distanciaKm">Dist/Km</label>
          <input type="number" id="distanciaKm" name="distanciaKm" value={formulario.distanciaKm} onChange={onChange} />
        </div>

        <div className={styles.inputValorKm}>
          <label htmlFor="valorKm">Valor/Km</label>
          <input type="number" step="0.01" id="valorKm" name="valorKm" value={formulario.valorKm} onChange={onChange} />
        </div>

        <div className={styles.inputFaturamento}>
          <label htmlFor="valorFaturado">Val. Faturado</label>
          <input type="number" step="0.01" id="valorFaturado" name="valorFaturado" value={formulario.valorFaturado} onChange={onChange} />
        </div>

        <div className={styles.inputDespesa}>
          <label htmlFor="despesa">Despesa</label>
          <input type="number" step="0.01" id="despesa" name="despesa" value={formulario.despesa} onChange={onChange} />
        </div>

        <div className={styles.salvarDeletar}>
          <button type="submit" className={styles.buttonSalvar}><h2>+ Salvar</h2></button>
          <button type="button" className={styles.buttonDeletar} onClick={onLimpar} aria-label="Limpar formulário">
            <img src={Deletar} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormularioSolicitacao;
