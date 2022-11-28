import { Link } from "react-router-dom";
import BtnCadastroLogin from "../BtnCadastroLogin/BtnCadastroLogin";
import Escreva from "../Escreva/Escreva";
import Styles from "./TelaDeLogin.module.css";


function TelaDeLogin(props){
    return(
        <>
            <div className={`${Styles.DivMeio} ${props.className}`}>
                <div className={Styles.MeioBaixo}>
                    <h1 className={Styles.TextoIniciar}>{props.h1}</h1>
                    <Escreva type ={props.type} placeholder ={props.placeholder}/>
                    <Escreva type ={props.type} placeholder ={props.placeholder}/>

                    <div className={`${Styles.Manter} ${props.className1}`}>
                        <input type="checkbox" name="ManterLogin" id="ManterLogin" className={Styles.Login} />
                        <label for="ManterLogin">{props.textCheck}</label>
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