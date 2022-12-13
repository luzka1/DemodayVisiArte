import Header from "../plataforma/reutilizavel/header/Header";
import styles from "./DtlPubli.module.css"

function DtlPubli(){
    return(
        <main>
            <Header />
            <section  className={styles.corpo}>
                <div className={styles.publiComp}>
                    <div className={styles.publi}></div>
                    <div className={styles.comentarios}></div>
                    <div className={styles.meuComentario}></div>
                </div>
            </section>
        </main>
    )
}

export default DtlPubli;