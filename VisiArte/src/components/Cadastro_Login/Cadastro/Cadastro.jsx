import Styles from "./Cadastro.module.css"
import Fundo from "../../../img/FundoLogin.png"
import TelaDeLogin from "../TelaLogin/TelaDeLogin";
import LogoLogin from "../Logo/Logo_Login";

function Cadastro() {
    return (
        <section className={Styles.fundo}>
            <LogoLogin className = {Styles.logoCadastro}/>
            <TelaDeLogin className = {Styles.telaCadastro}/>

            <div className={Styles.divEsquerda}>
                <span className={Styles.crieSpan}>CRIE UMA CONTA</span>
            </div>
        </section>
    )
}

export default Cadastro;