import Styles from "./Login.module.css"
import Fundo from "../../../img/backprincipalEscuro.jpg";
import LogoLogin from "./Logo/Logo_Login";
import TelaDeLogin from "./TelaLogin/TelaDeLogin";
import { Link } from "react-router-dom"


function Login() {
    return (
        <section className={Styles.fundo}>
            <LogoLogin />
            <TelaDeLogin />
        </section>
    )
}

export default Login;