import Styles from "./Cadastro.module.css"
import Fundo from "../../../img/FundoLogin.png"
import TelaDeLogin from "../TelaLogin/TelaDeLogin";
import LogoLogin from "../Logo/Logo_Login";

function Cadastro() {
    return (
        <section className={Styles.fundo}>
        <LogoLogin className = {Styles.logoCadastro}/>
        <TelaDeLogin className = {Styles.telaCadastro}/>
        <span className={Styles.crieSpan}>Crie uma conta</span>
        </section>
    )
}

export default Cadastro;