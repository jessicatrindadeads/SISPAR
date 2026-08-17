import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";

function TabelaSolicitacoes({ solicitacoes, onExcluir, formatarData }) {
  return (
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
              <button type="button" onClick={() => onExcluir(solicitacao.id)} aria-label={`Excluir solicitação de ${solicitacao.nome}`}>
                <img src={Lixeira} alt="" aria-hidden="true" />
              </button>
            </td>
            <td>{solicitacao.nome}</td>
            <td>{solicitacao.empresa}</td>
            <td>{solicitacao.prestacao || "—"}</td>
            <td>{formatarData(solicitacao.data)}</td>
            <td><img src={Motivo} alt="Motivo informado" title={solicitacao.motivo} /></td>
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
      </tbody>
    </table>
  );
}

export default TabelaSolicitacoes;
