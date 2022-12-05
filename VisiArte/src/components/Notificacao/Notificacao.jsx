import Interacao from "./interacoes/Interacoes";
import styles from "./Notificacao.module.css"

function Notificacao(){
    return(
        <section className={styles.fundoNot}>
            <div className={styles.divH1}>
                <h1>Notificação</h1>
            </div>
            <div className={styles.divInteracao}>
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
                <Interacao />
            </div>
        </section>
    )
}

export default Notificacao;