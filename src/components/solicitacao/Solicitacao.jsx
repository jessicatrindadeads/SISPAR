import { useMemo, useState } from "react";
import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Check from "../../assets/Solicitacao/check.png";

const solicitacoesIniciais = [
  {
    id: 1,
    nome: "Vitor Carvalho",
    empresa: "WSS001",
    prestacao: "329456",
    data: "2025-01-08",
    motivo: "Despesa administrativa",
    tipoDespesa: "Viagem administrativa",
    centroCusto: "1100110002 - FIN VICE-PRESIDÊNCIA FINANÇAS MTZ",
    ordemInterna: "0003",
    divisao: "002",
    pep: "001",
    moeda: "BRL",
    distanciaKm: "434",
    valorKm: "0.65",
    valorFaturado: "242.10",
    despesa: "40.05",
  },
  {
    id: 2,
    nome: "Vanessa Portugal",
    empresa: "WSS002",
    prestacao: "987789",
    data: "2025-01-01",
    motivo: "Despesa administrativa",
    tipoDespesa: "Viagem administrativa",
    centroCusto: "1100110102 - FIN CONTABILIDADE MTZ",
    ordemInterna: "0002",
    divisao: "005",
    pep: "001",
    moeda: "ARS",
    distanciaKm: "289",
    valorKm: "0.37",
    valorFaturado: "106.93",
    despesa: "0.00",
  },
  {
    id: 3,
    nome: "Washington Klinglon",
    empresa: "WSS003",
    prestacao: "546791",
    data: "2025-01-03",
    motivo: "Evento de representação",
    tipoDespesa: "Eventos de representação",
    centroCusto: "1100109002 - FIN CONTROLES INTERNOS MTZ",
    ordemInterna: "0001",
    divisao: "005",
    pep: "001",
    moeda: "USD",
    distanciaKm: "197",
    valorKm: "0.75",
    valorFaturado: "109.75",
    despesa: "29.97",
  },
];

const formularioInicial = {
  nome: "",
  empresa: "",
  prestacao: "",
  motivo: "",
  data: "",
  tipoDespesa: "",
  centroCusto: "",
  ordemInterna: "",
  divisao: "",
  pep: "",
  moeda: "",
  distanciaKm: "",
  valorKm: "",
  valorFaturado: "",
  despesa: "",
};

function Solicitacao() {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [solicitacoes, setSolicitacoes] = useState(solicitacoesIniciais);

  const atualizarCampo = (evento) => {
    const { name, value } = evento.target;
    setFormulario((estadoAtual) => ({ ...estadoAtual, [name]: value }));
  };

  const salvarSolicitacao = (evento) => {
    evento.preventDefault();

    if (
      !formulario.nome.trim() ||
      !formulario.empresa.trim() ||
      !formulario.data ||
      !formulario.tipoDespesa ||
      !formulario.centroCusto
    ) {
      return;
    }

    const novaSolicitacao = {
      ...formulario,
      id: Date.now(),
    };

    setSolicitacoes((listaAtual) => [...listaAtual, novaSolicitacao]);
    setFormulario(formularioInicial);
  };

  const excluirSolicitacao = (id) => {
    setSolicitacoes((listaAtual) =>
      listaAtual.filter((solicitacao) => solicitacao.id !== id)
    );
  };

  const limparFormulario = () => {
    setFormulario(formularioInicial);
  };

  const totalFaturado = useMemo(
    () =>
      solicitacoes.reduce(
        (total, solicitacao) => total + Number(solicitacao.valorFaturado || 0),
        0
      ),
    [solicitacoes]
  );

  const totalDespesa = useMemo(
    () =>
      solicitacoes.reduce(
        (total, solicitacao) => total + Number(solicitacao.despesa || 0),
        0
      ),
    [solicitacoes]
  );

  const formatarData = (data) => {
    if (!data) return "—";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Início" />
          <img src={Seta} alt="" aria-hidden="true" />
          <p>Reembolsos</p>
          <img src={Seta} alt="" aria-hidden="true" />
          <p>Solicitação de Reembolso</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form className={styles.formSolicitacao} onSubmit={salvarSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formulario.nome}
                  onChange={atualizarCampo}
                  required
                />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formulario.empresa}
                  onChange={atualizarCampo}
                  required
                />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="prestacao">Nº Prest. Contas</label>
                <input
                  type="number"
                  id="prestacao"
                  name="prestacao"
                  value={formulario.prestacao}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="motivo">Descrição / Motivo do Reembolso</label>
                <textarea
                  id="motivo"
                  name="motivo"
                  value={formulario.motivo}
                  onChange={atualizarCampo}
                />
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="data">Data</label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formulario.data}
                  onChange={atualizarCampo}
                  required
                />
              </div>

              <div className={styles.despesas}>
                <label htmlFor="tipoDespesa">Tipo de Despesa</label>
                <select
                  name="tipoDespesa"
                  id="tipoDespesa"
                  value={formulario.tipoDespesa}
                  onChange={atualizarCampo}
                  required
                >
                  <option value="" disabled>
                    Selecionar
                  </option>
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
                <select
                  name="centroCusto"
                  id="centroCusto"
                  value={formulario.centroCusto}
                  onChange={atualizarCampo}
                  required
                >
                  <option value="" disabled>
                    Selecionar
                  </option>
                  <option value="1100109002 - FIN CONTROLES INTERNOS MTZ">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="1100110002 - FIN VICE-PRESIDÊNCIA FINANÇAS MTZ">
                    1100110002 - FIN VICE-PRESIDÊNCIA FINANÇAS MTZ
                  </option>
                  <option value="1100110102 - FIN CONTABILIDADE MTZ">
                    1100110102 - FIN CONTABILIDADE MTZ
                  </option>
                </select>
              </div>

              <div className={styles.inputOrdem}>
                <label htmlFor="ordemInterna">Ord. Int.</label>
                <input
                  type="number"
                  id="ordemInterna"
                  name="ordemInterna"
                  value={formulario.ordemInterna}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="divisao">Div.</label>
                <input
                  type="number"
                  id="divisao"
                  name="divisao"
                  value={formulario.divisao}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.inputPep}>
                <label htmlFor="pep">PEP</label>
                <input
                  type="number"
                  id="pep"
                  name="pep"
                  value={formulario.pep}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.inputMoeda}>
                <label htmlFor="moeda">Moeda</label>
                <input
                  type="text"
                  id="moeda"
                  name="moeda"
                  value={formulario.moeda}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.inputDistanciaKm}>
                <label htmlFor="distanciaKm">Dist/Km</label>
                <input
                  type="number"
                  id="distanciaKm"
                  name="distanciaKm"
                  value={formulario.distanciaKm}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.inputValorKm}>
                <label htmlFor="valorKm">Valor/Km</label>
                <input
                  type="number"
                  step="0.01"
                  id="valorKm"
                  name="valorKm"
                  value={formulario.valorKm}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.inputFaturamento}>
                <label htmlFor="valorFaturado">Val. Faturado</label>
                <input
                  type="number"
                  step="0.01"
                  id="valorFaturado"
                  name="valorFaturado"
                  value={formulario.valorFaturado}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.inputDespesa}>
                <label htmlFor="despesa">Despesa</label>
                <input
                  type="number"
                  step="0.01"
                  id="despesa"
                  name="despesa"
                  value={formulario.despesa}
                  onChange={atualizarCampo}
                />
              </div>

              <div className={styles.salvarDeletar}>
                <button type="submit" className={styles.buttonSalvar}>
                  <h2>+ Salvar</h2>
                </button>

                <button
                  type="button"
                  className={styles.buttonDeletar}
                  onClick={limparFormulario}
                  aria-label="Limpar formulário"
                >
                  <img src={Deletar} alt="" aria-hidden="true" />
                </button>
              </div>
            </div>
          </form>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              {solicitacoes.map((solicitacao) => (
                <tr key={solicitacao.id}>
                  <td>
                    <button
                      type="button"
                      onClick={() => excluirSolicitacao(solicitacao.id)}
                      aria-label={`Excluir solicitação de ${solicitacao.nome}`}
                    >
                      <img src={Lixeira} alt="" aria-hidden="true" />
                    </button>
                  </td>
                  <td>{solicitacao.nome}</td>
                  <td>{solicitacao.empresa}</td>
                  <td>{solicitacao.prestacao || "—"}</td>
                  <td>{formatarData(solicitacao.data)}</td>
                  <td>
                    <img src={Motivo} alt="Motivo informado" title={solicitacao.motivo} />
                  </td>
                  <td>{solicitacao.tipoDespesa || "—"}</td>
                  <td>{solicitacao.centroCusto || "—"}</td>
                  <td>{solicitacao.ordemInterna || "—"}</td>
                  <td>{solicitacao.divisao || "—"}</td>
                  <td>{solicitacao.pep || "—"}</td>
                  <td>{solicitacao.moeda || "—"}</td>
                  <td>{solicitacao.distanciaKm ? `${solicitacao.distanciaKm}Km` : "—"}</td>
                  <td>{solicitacao.valorKm || "0.00"}</td>
                  <td>{Number(solicitacao.valorFaturado || 0).toFixed(2)}</td>
                  <td>{Number(solicitacao.despesa || 0).toFixed(2)}</td>
                </tr>
              ))}

              <tr className={styles.espacoTable}></tr>
            </tbody>
          </table>

          <div className={styles.divRodape}>
            <div className={styles.inputTotalFaturado}>
              <label htmlFor="totalFaturado">Total Faturado</label>
              <input
                type="text"
                id="totalFaturado"
                value={totalFaturado.toFixed(2)}
                readOnly
              />
            </div>

            <div className={styles.inputTotalDespesa}>
              <label htmlFor="totalDespesa">Total Despesa</label>
              <input
                type="text"
                id="totalDespesa"
                value={totalDespesa.toFixed(2)}
                readOnly
              />
            </div>

            <button type="button" className={styles.buttonCheck}>
              <img src={Check} alt="" aria-hidden="true" />
              <h2>Enviar para Análise</h2>
            </button>

            <button type="button" className={styles.buttonCancelar}>
              <h2>X Cancelar Solicitação</h2>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Solicitacao;
