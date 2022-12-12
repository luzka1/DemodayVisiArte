import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../../../API";
import BtnCadastroLogin from "../BtnCadastroLogin/BtnCadastroLogin";
import Styles from "./TelaDeLogin.module.css";

function TelaDeLogin() {
    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const data = {
        usuarioLogin: usuario,
        senha: senha,
    };

    function fazerLogin(e) {
        e.preventDefault();
        axios
            .post(`${URL_API}/usuarios/login`, JSON.stringify(data))
            .then((response) => {
                console.log(response.data);
            });
    }

    return (
        <>
            <form onSubmit={(e) => fazerLogin(e)}>
                <div className={Styles.DivMeio}>
                    <div className={Styles.MeioBaixo}>
                        <h1 className={Styles.TextoIniciar}>Conectar-se</h1>
                        <div className={Styles.Iniciando}>
                            <input
                                value={usuario}
                                onChange={({ target }) =>
                                    setUsuario(target.value)
                                }
                                required
                                type="text"
                                placeholder="E-MAIL OU USUARIO"
                                className={Styles.Nome}
                            />
                        </div>

                        <div className={Styles.Iniciando}>
                            <input
                                value={senha}
                                onChange={({ target }) =>
                                    setSenha(target.value)
                                }
                                required
                                type="password"
                                placeholder="SENHA"
                                className={Styles.Nome}
                            />
                        </div>

                        <div className={Styles.Manter}>
                            <input
                                type="checkbox"
                                name="ManterLogin"
                                id="ManterLogin"
                                className={Styles.Login}
                            />
                            <label htmlFor="ManterLogin">
                                Manter conectado
                            </label>
                        </div>

                        <button type="submit">
                            <BtnCadastroLogin
                                // Acessar={Acessar}
                                className={Styles.BtnLogin}
                            />
                        </button>

                        {/* <Link to="/" className={Styles.EsqSenha}>
                            Esqueceu a senha?
                        </Link> */}

                        <Link to="/cadastro" className={Styles.CrieConta}>
                            Criar conta
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}

export default TelaDeLogin;
