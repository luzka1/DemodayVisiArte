import { Link } from "react-router-dom";
import BtnCadastroLogin from "../BtnCadastroLogin/BtnCadastroLogin";
import Escreva from "../Escreva/Escreva";
import Styles from "./TelaDeLogin.module.css";


function TelaDeLogin(props){
    return(
        <>
            <div className={Styles.DivMeio}>
                <div className={Styles.MeioBaixo}>
                    <h1 className={Styles.TextoIniciar}>Conectar-se</h1>
                    <Escreva type ="TEXT" placeholder ="E-MAIL OU USUARIO"/>
                    <Escreva type ="password" placeholder ="SENHA"/>

                    <div className={Styles.Manter}>
                        <input type="checkbox" name="ManterLogin" id="ManterLogin" className={Styles.Login} />
                        <label for="ManterLogin">Manter conectado</label>
                    </div>

                    <BtnCadastroLogin Acessar = {props.Acessar} className={Styles.BtnLogin}/>
        
                    <Link to="/" className={Styles.EsqSenha}>Esqueceu a senha?</Link>
        
                    <Link to="/cadastro" className={Styles.CrieConta}>Criar conta</Link>
                </div>
            </div>
        </>
    )
}

export default TelaDeLogin;