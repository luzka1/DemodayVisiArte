import { Link } from "react-router-dom";
import BtnCadastroLogin from "../BtnCadastroLogin/BtnCadastroLogin";
import Escreva from "../Escreva/Escreva";
import Styles from "./TelaDeLogin.module.css";


function TelaDeLogin(){
    return(
        <>
            <div className={Styles.DivMeio}>
                <div className={Styles.MeioBaixo}>
                    <h1 className={Styles.TextoIniciar}>Iniciar sessão</h1>
                    <Escreva type ="text" placeholder ="email / nome de usuario"/>
                    <Escreva type ="password" placeholder ="Senha"/>

                    <div className={Styles.Manter}>
                        <input type="checkbox" name="ManterLogin" id="ManterLogin" className={Styles.Login} />
                        <label for="ManterLogin">Manter conectado</label>
                    </div>

                    <BtnCadastroLogin Acessar = "Acessar"/>
        
                    <Link to="/" className={Styles.EsqSenha}>Esqueceu a senha?</Link>
        
                    <Link to="/cadastro" className={Styles.CrieConta}>Criar conta</Link>
                </div>
            </div>
        </>
    )
}

export default TelaDeLogin;