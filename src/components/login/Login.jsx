import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Capa from "../../assets/TelaLogin/imagemcapa.png";
import Logo from "../../assets/TelaLogin/logo-ws.png";
import styles from "./Login.module.scss";

function Login() {
  const navigate = useNavigate();
  const [credenciais, setCredenciais] = useState({ email: "", senha: "" });
  const [mensagem, setMensagem] = useState("");

  const atualizarCampo = (evento) => {
    const { name, value } = evento.target;
    setCredenciais((estadoAtual) => ({ ...estadoAtual, [name]: value }));
    setMensagem("");
  };

  const entrar = (evento) => {
    evento.preventDefault();

    if (!credenciais.email.trim() || !credenciais.senha.trim()) {
      setMensagem("Preencha o e-mail e a senha para continuar.");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credenciais.email);

    if (!emailValido) {
      setMensagem("Informe um e-mail válido.");
      return;
    }

    navigate("/reembolsos");
  };

  return (
    <main className={styles.loginPage}>
      <section className={styles.containerLogin}>
        <img src={Capa} alt="Navio cargueiro" />
      </section>

      <section className={styles.containerForm}>
        <img src={Logo} alt="Logo da Wilson Sons" />
        <h1>Boas-vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamentos</p>

        <form className={styles.formLogin} onSubmit={entrar} noValidate>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={credenciais.email}
            onChange={atualizarCampo}
            autoComplete="email"
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            value={credenciais.senha}
            onChange={atualizarCampo}
            autoComplete="current-password"
          />

          {mensagem && (
            <p role="alert" aria-live="assertive">
              {mensagem}
            </p>
          )}

          <button type="button" className={styles.linkRecuperarSenha}>
            Esqueci minha senha
          </button>

          <div className={styles.divButton}>
            <button type="submit" className={styles.buttonEntrar}>
              Entrar
            </button>
            <button type="button" className={styles.buttonCriar}>
              Criar conta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
