import Styles from "./Cadastro.module.css"
import Fundo from "../../../img/FundoLogin.png"
import LogoLogin from "../Logo/Logo_Login";
import PrimeiraCadastro from "../TCadastro/primeiraTela/PrimeiraCadastro";

function Cadastro() {
    return (
        <section className={Styles.fundo}>
            <LogoLogin className = {Styles.logoCadastro}/>
            <PrimeiraCadastro className = {Styles.telaCadastro}/>

            <div className={Styles.divEsquerda}>
                <span className={Styles.crieSpan}>CRIE UMA CONTA</span>
            </div>
        </section>
    )
}

export default Cadastro;