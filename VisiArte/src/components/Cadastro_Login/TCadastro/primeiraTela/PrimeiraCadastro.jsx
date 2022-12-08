import { Link } from "react-router-dom";
import{ useState } from "react"
import BtnCadastroLogin from "../../BtnCadastroLogin/BtnCadastroLogin";
import Escreva from "../../Escreva/Escreva";
import Styles from "./PrimeiraCadastro.module.css";


function PrimeiraCadastro(props){
    const [step, setStep] = useState(1)

    // const pegueCompStep = () => {
    //     switch (step){
    //         case 1:
    //             return <PrimeiraCadastro />;
    //         case 2:
    //             return <SegundaCadastro />;
    //         case 3:
    //             return <TerceiraCadastro />;
    //         default:
    //             return <PrimeiraCadastro />
    //     }
    // }

    return(
        <>
            <div className={Styles.DivMeio}>
                <section className={Styles.sectionCima}>
                    <Link to ="/cadastro" className={`${Styles.Primeira} ${Styles.divs}`}></Link>
                    <div className={`${Styles.segunda} ${Styles.divs}`}></div>
                    <div className={`${Styles.terceira} ${Styles.divs}`}></div>
                    <div className={`${Styles.quarta} ${Styles.divs}`}></div>
                </section>
                <div className={Styles.MeioBaixo}>
                    <h1 className={Styles.TextoIniciar}>Qual o seu e-mail?</h1>
                    <Escreva type ="TEXT" placeholder ="DIGITE SEU E-MAIL"/>

                    <div className={Styles.Manter}>
                        <input type="checkbox" name="notificação" id="notificação" className={Styles.Login} />
                        <label for="notificação">Receber notificações em seu e-mail sobre novas artes e novidades da VisiArte</label>
                    </div>

                    <BtnCadastroLogin Acessar = {step === 4 ? "Entrar" : "Próximo"} className= {Styles.BtnLogin} onClick={() => step !== 4 && setStep(step + 1)}/>

                    <Link to="/login" className={Styles.TemConta}>Já possui uma conta?</Link>
                </div>
            </div>
        </>
    )
}

export default PrimeiraCadastro;