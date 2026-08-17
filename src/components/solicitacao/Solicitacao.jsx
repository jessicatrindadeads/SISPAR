import { useMemo, useState } from "react";
import NavBar from "../navbar/NavBar.jsx";
import FormularioSolicitacao from "./FormularioSolicitacao.jsx";
import TabelaSolicitacoes from "./TabelaSolicitacoes.jsx";
import ResumoSolicitacao from "./ResumoSolicitacao.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";

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
  const [mensagem, setMensagem] = useState("");

  const atualizarCampo = (evento) => {
    const { name, value } = evento.target;
    setFormulario((estadoAtual) => ({ ...estadoAtual, [name]: value }));
    setMensagem("");
  };

  const salvarSolicitacao = (evento) => {
    evento.preventDefault();

    const camposObrigatoriosPreenchidos =
      formulario.nome.trim() &&
      formulario.empresa.trim() &&
      formulario.data &&
      formulario.tipoDespesa &&
      formulario.centroCusto;

    if (!camposObrigatoriosPreenchidos) {
      setMensagem("Preencha os campos obrigatórios antes de salvar a solicitação.");
      return;
    }

    setSolicitacoes((listaAtual) => [
      ...listaAtual,
      { ...formulario, id: Date.now() },
    ]);

    setFormulario(formularioInicial);
    setMensagem("Solicitação adicionada com sucesso.");
  };

  const excluirSolicitacao = (id) => {
    setSolicitacoes((listaAtual) =>
      listaAtual.filter((solicitacao) => solicitacao.id !== id)
    );
    setMensagem("Solicitação removida com sucesso.");
  };

  const limparFormulario = () => {
    setFormulario(formularioInicial);
    setMensagem("Formulário limpo.");
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
          <FormularioSolicitacao
            formulario={formulario}
            onChange={atualizarCampo}
            onSubmit={salvarSolicitacao}
            onLimpar={limparFormulario}
          />

          {mensagem && (
            <p role="status" aria-live="polite">
              {mensagem}
            </p>
          )}

          <TabelaSolicitacoes
            solicitacoes={solicitacoes}
            onExcluir={excluirSolicitacao}
            formatarData={formatarData}
          />

          <ResumoSolicitacao
            totalFaturado={totalFaturado}
            totalDespesa={totalDespesa}
          />
        </main>
      </div>
    </div>
  );
}

export default Solicitacao;
