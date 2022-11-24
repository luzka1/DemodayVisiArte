import { Link } from "react-router-dom";
import Escreva from "../Escreva/Escreva";
import Styles from "./TelaDeLogin.module.css";


function TelaDeLogin(){
    return(
        <>
            <div className={Styles.DivMeio}>
                <div className={Styles.MeioBaixo}>
                    <h1 className={Styles.TextoIniciar}>Iniciar sessão</h1>
                    <Escreva placeholder ="email / nome de usuario"/>
                    <Escreva placeholder ="Senha"/>

                    <div className={Styles.Manter}>
                        <input type="checkbox" name="ManterLogin" id="ManterLogin" className={Styles.Login} />
                        <label for="ManterLogin">Manter conectado</label>
                    </div>

                    <Link to="/feed" className={Styles.Acessar}>
                        Acessar
                        <span>&#x276F;</span>
                    </Link>
        
                    <Link to="/" className={Styles.EsqSenha}>Esqueceu a senha?</Link>
        
                    <Link to="/cadastro" className={Styles.CrieConta}>Criar conta</Link>
                </div>
            </div>
        </>
    )
}

export default TelaDeLogin;