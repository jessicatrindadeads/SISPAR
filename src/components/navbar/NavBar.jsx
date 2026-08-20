import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png";
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";

function NavBar() {
  const navigate = useNavigate();
  const [recolhida, setRecolhida] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const informarFuncionalidadeDemonstrativa = (funcionalidade) => {
    setMensagem(`${funcionalidade} ainda não está disponível nesta versão demonstrativa.`);
  };

  return (
    <nav
      className={`${styles.navBarEstilo} ${recolhida ? styles.navBarRecolhida : ""}`}
      aria-label="Navegação principal"
    >
      {mensagem && (
        <p className={styles.mensagemNavegacao} role="status" aria-live="polite">
          {mensagem}
        </p>
      )}
      <button
        type="button"
        onClick={() => setRecolhida((estadoAtual) => !estadoAtual)}
        aria-label={recolhida ? "Expandir menu" : "Recolher menu"}
        title={recolhida ? "Expandir menu" : "Recolher menu"}
      >
        <img src={Fechar} alt="" aria-hidden="true" />
      </button>

      <section>
        {!recolhida && <img src={Perfil} alt="Perfil do usuário" />}

        <div className={styles.boxButton}>
          <button type="button" onClick={() => navigate("/reembolsos")} aria-label="Início" title="Início">
            <img src={Home} alt="" aria-hidden="true" />
          </button>

          <button type="button" onClick={() => navigate("/solicitacao")} aria-label="Solicitar reembolso" title="Solicitar reembolso">
            <img src={Reembolso} alt="" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => informarFuncionalidadeDemonstrativa("A pesquisa")}
            aria-label="Pesquisar"
            title="Pesquisar"
          >
            <img src={Pesquisa} alt="" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => informarFuncionalidadeDemonstrativa("O histórico")}
            aria-label="Histórico"
            title="Histórico"
          >
            <img src={Historico} alt="" aria-hidden="true" />
          </button>
        </div>
      </section>

      <button
        type="button"
        className={styles.buttonSair}
        onClick={() => navigate("/")}
        aria-label="Sair"
        title="Sair"
      >
        <img src={Sair} alt="" aria-hidden="true" />
      </button>
    </nav>
  );
}

export default NavBar;
